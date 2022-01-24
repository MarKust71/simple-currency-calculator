import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { api } from 'api/axiosApi';
import { setCurrencies, setCurrencyFrom } from 'stores/currenciesStore/currenciesActionCreators';
import { TReducer } from 'stores';

export const useCurrencies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currencyNameFrom, setCurrencyNameFrom] = useState('');

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

  const setCurrencyCodeFrom = (currencyCode: string) => {
    dispatch(
      setCurrencyFrom({
        ...currencies,
        currencyFrom: currencyCode,
      }),
    );
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

  return { isLoading, getCurrencies, setCurrencyCodeFrom, currencyNameFrom };
};
