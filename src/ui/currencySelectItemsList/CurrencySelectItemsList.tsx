import React from 'react';
import { MenuItem } from '@mui/material';

import { CurrencySelectItemsListProps } from './CurrencySelectItemsList.types';

export const CurrencySelectItemsList: React.FC<CurrencySelectItemsListProps> = ({ currencies }) => {
  return (
    <>
      {Object.entries(currencies).map((entry) => {
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
