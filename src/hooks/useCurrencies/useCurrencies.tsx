import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { api } from 'api/axiosApi';
import { setCurrencies, setCurrencyFrom, setCurrencyTo } from 'stores/currenciesStore/currenciesActionCreators';
import { TReducer } from 'stores';
import { useHistory } from 'hooks/useHistory/useHistory';

export const useCurrencies = () => {
  const dispatch = useDispatch();
  const { addItem } = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currencyNameFrom, setCurrencyNameFrom] = useState('');
  const [currencyNameTo, setCurrencyNameTo] = useState('');
  const [result, setResult] = useState('');
  const [rate, setRate] = useState('');

  const currencies = useSelector((state: TReducer) => state.currencies);

  const getCurrencies = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/latest/currencies.json');

      dispatch(setCurrencies(response.data));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.debug(error);
    }
  };

  const getCurrentRate = async ({
    currencyFrom,
    currencyTo,
  }: {
    currencyFrom: string;
    currencyTo: string;
  }): Promise<string> => {
    try {
      setIsLoading(true);
      const response = await api.get(`/latest/currencies/${currencyFrom}.json`);

      const rates = response.data;

      setRate(rates[currencyFrom][currencyTo]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.debug(error);
    }

    return '';
  };

  const setCurrencyCodeFrom = (currencyCode: string) => {
    dispatch(
      setCurrencyFrom({
        ...currencies,
        currencyFrom: currencyCode,
      }),
    );
  };

  const setCurrencyCodeTo = (currencyCode: string) => {
    dispatch(
      setCurrencyTo({
        ...currencies,
        currencyTo: currencyCode,
      }),
    );
  };

  const calculate = async () => {
    setResult('');

    if (!currencies.currencyFrom || !currencies.currencyTo) {
      return '';
    }

    try {
      await getCurrentRate({ currencyFrom: currencies.currencyFrom || '', currencyTo: currencies.currencyTo || '' });
      if (!currencies?.amount) {
        return;
      }
      const { amount } = currencies;
      setResult((+amount * +rate).toFixed(2));
    } catch (error) {
      console.debug(error);
    }
  };

  useEffect(() => {
    const { currencyFrom } = currencies;

    if (!currencyFrom) return;

    const entries = Object.entries({ ...currencies.currencies });
    const [entry] = entries.filter((item) => {
      const [code] = item;
      return code === currencyFrom;
    });

    if (!entry) return;

    const [, name] = entry;

    setCurrencyNameFrom(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.currencyFrom]);

  useEffect(() => {
    const { currencyTo } = currencies;

    if (!currencyTo) return;

    const entries = Object.entries({ ...currencies.currencies });
    const [entry] = entries.filter((item) => {
      const [code] = item;
      return code === currencyTo;
    });

    if (!entry) return;

    const [, name] = entry;

    setCurrencyNameTo(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.currencyTo]);

  useEffect(() => {
    setResult('');
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.currencyTo, currencies.currencyFrom, currencies.amount, rate]);

  useEffect(() => {
    if (!currencies.amount || !currencies.currencyFrom || !currencies.currencyTo || !result || !parseFloat(result))
      return;
    // TODO: do some debounce!
    addItem({
      date: new Date().toISOString(),
      currencyValueTo: result,
      currencyValueFrom: currencies.amount,
      currencyCodeFrom: currencies.currencyFrom?.toUpperCase(),
      currencyCodeTo: currencies.currencyTo?.toUpperCase(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return {
    isLoading,
    getCurrencies,
    setCurrencyCodeFrom,
    setCurrencyCodeTo,
    currencyNameFrom,
    currencyNameTo,
    result,
  };
};
