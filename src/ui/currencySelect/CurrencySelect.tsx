import React from 'react';
import { Box, FormControl, InputLabel, Select } from '@mui/material';

import { CurrencySelectItemsList } from 'ui/currencySelectItemsList/CurrencySelectItemsList';

import { CurrencySelectProps } from './CurrencySelect.types';

export const CurrencySelect: React.FC<CurrencySelectProps> = ({ currencies, currency, handleSelectChange }) => {
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Currency</InputLabel>
        <Select
          label="Currency"
          value={currency}
          defaultValue=""
          onChange={handleSelectChange}
          renderValue={(value) => value.toUpperCase()}
        >
          <CurrencySelectItemsList currencies={currencies} />
        </Select>
      </FormControl>
    </Box>
  );
};
