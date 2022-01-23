import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { api } from 'api/axiosApi';
import { setCurrencies } from 'stores/currenciesStore/currenciesActionCreators';

export const useCurrencies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return { isLoading, getCurrencies };
};
