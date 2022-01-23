import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useSelector } from 'react-redux';

import { TReducer } from 'stores';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

export const CurrencySelect = (): JSX.Element => {
  const { setCurrencyCodeFrom } = useCurrencies();

  const { currencies, currencyFrom } = useSelector((state: TReducer) => state.currencies);

  const handleSelectChange = ({ target }: SelectChangeEvent<string>) => {
    setCurrencyCodeFrom(target.value);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Currency</InputLabel>
        <Select
          label="Currency"
          value={currencyFrom}
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
