import { SelectChangeEvent } from '@mui/material';

export type CurrencySelectProps = {
  value: string;
  handleSelectChange: ({ target }: SelectChangeEvent<string>) => void;
};
