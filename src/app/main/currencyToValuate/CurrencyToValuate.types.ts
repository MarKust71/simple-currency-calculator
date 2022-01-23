import React from 'react';
import { SelectChangeEvent } from '@mui/material';

import { ICurrencies } from 'stores/currenciesStore/currencies.types';

export type CurrencyToValuateProps = {
  currencies: ICurrencies;
  amount: string;
  currency: string;
  currencyName: string;
  handleAmountChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
