import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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
          MenuProps={{
            PaperProps: {
              sx: { maxHeight: 400 },
            },
          }}
        >
          {/*
          <CurrencySelectItemsList currencies={currencies} />
*/}
          {Object.entries(currencies).map((entry) => {
            const [code, name] = entry;
            return (
              <MenuItem key={code} value={code}>
                {`${code.toUpperCase()} ${name}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
