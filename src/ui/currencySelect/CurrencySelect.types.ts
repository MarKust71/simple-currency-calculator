import { SelectChangeEvent } from '@mui/material';

import { ICurrencies } from 'stores/currenciesStore/currencies.types';

export type CurrencySelectProps = {
  currencies: ICurrencies;
  currency: string;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
