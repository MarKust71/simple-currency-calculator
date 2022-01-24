import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';

import { TReducer } from 'stores';

import { CurrencySelectProps } from './CurrencySelect.types';

export const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, onChange }) => {
  const { currencies } = useSelector((state: TReducer) => state.currencies);

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Currency</InputLabel>
        <Select
          label="Currency"
          value={value}
          defaultValue=""
          onChange={onChange}
          renderValue={(value) => value.toUpperCase()}
          MenuProps={{
            PaperProps: {
              sx: { maxHeight: 400 },
            },
          }}
        >
          {/*
          // find out why doesn't it work as an extracted component
          <CurrencySelectItemsList />
*/}

          {!!currencies &&
            Object.entries(currencies).map((entry) => {
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
