import { SelectChangeEvent } from '@mui/material';

export type CurrencySelectProps = {
  value: string;
  onChange: ({ target }: SelectChangeEvent<string>) => void;
};
