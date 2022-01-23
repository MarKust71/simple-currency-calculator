import React from 'react';
import { SelectChangeEvent } from '@mui/material';

export type CurrencyToValuateProps = {
  amount: string;
  value: string;
  currencyName: string;
  handleAmountChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
