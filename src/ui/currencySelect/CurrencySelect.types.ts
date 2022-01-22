import { SelectChangeEvent } from '@mui/material';

import { TCurrencies } from 'hooks/useCurrencies/useCurrencies.types';

export type CurrencySelectProps = {
  currencies: TCurrencies | Record<string, never>;
  currency: string;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
