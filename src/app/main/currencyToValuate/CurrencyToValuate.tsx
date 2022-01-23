import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { StyledTextField } from 'ui/styledTextField/StyledTextField';
import { CurrencySelect } from 'ui/currencySelect/CurrencySelect';
import { TReducer } from 'stores';

import { CurrencyToValuateProps } from './CurrencyToValuate.types';
import { useStyles } from './CurrencyToValuate.styles';

export const CurrencyToValuate: React.FC<CurrencyToValuateProps> = ({ amount, handleAmountChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [currencyName, setCurrencyName] = useState('');

  const { currencies, currencyFrom } = useSelector((state: TReducer) => state.currencies);

  useEffect(() => {
    if (!currencyFrom) return;

    const entries = Object.entries({ ...currencies });
    const [entry] = entries.filter((item) => {
      const [code] = item;
      return code === currencyFrom;
    });

    if (!entry) return;

    const [, name] = entry;

    setCurrencyName(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyFrom]);

  return (
    <>
      <Box mb={1}>
        <Typography variant="body2">Amount and currency you want to valuate:</Typography>
      </Box>
      <Box className={classes.inputWrapper} mb={0.5}>
        <StyledTextField required label="Amount" placeholder="Amount" value={amount} onChange={handleAmountChange} />
        <Box mr={1} />
        <CurrencySelect />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', px: 1 }}>
        <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
          {currencyName}
        </Typography>
      </Box>
    </>
  );
};
