import React from 'react';
import { SelectChangeEvent } from '@mui/material';

import { TCurrencies } from 'hooks/useCurrencies/useCurrencies.types';

export type CurrencyToValuateProps = {
  currencies: TCurrencies | Record<string, never>;
  amount: string;
  currency: string;
  currencyName: string;
  handleAmountChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
