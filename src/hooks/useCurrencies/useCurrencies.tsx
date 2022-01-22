import { useState } from 'react';

import { api } from 'api/axiosApi';

import { TCurrencies } from './useCurrencies.types';

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<TCurrencies | Record<string, never>>({});

  const getCurrencies = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/latest/currencies.json');

      setCurrencies(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.debug(error);
    }
  };

  return { isLoading, currencies, getCurrencies };
};
