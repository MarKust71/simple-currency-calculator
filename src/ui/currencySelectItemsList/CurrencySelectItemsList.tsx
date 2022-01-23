import React from 'react';
import { MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';

import { TReducer } from 'stores';

export const CurrencySelectItemsList = (): JSX.Element => {
  const { currencies } = useSelector((state: TReducer) => state.currencies);

  return (
    <>
      {!!currencies &&
        Object.entries(currencies).map((entry) => {
          const [code, name] = entry;
          return (
            <MenuItem key={code} value={code}>
              {`${code.toUpperCase()} ${name}`}
            </MenuItem>
          );
        })}
    </>
  );
};
