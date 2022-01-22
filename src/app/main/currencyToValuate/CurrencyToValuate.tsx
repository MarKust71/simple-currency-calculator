import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { StyledTextField } from 'ui/styledTextField/StyledTextField';
import { CurrencySelect } from 'ui/currencySelect/CurrencySelect';

import { CurrencyToValuateProps } from './CurrencyToValuate.types';
import { useStyles } from './CurrencyToValuate.styles';

export const CurrencyToValuate: React.FC<CurrencyToValuateProps> = ({
  amount,
  currency,
  currencyName,
  currencies,
  handleAmountChange,
  handleSelectChange,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Box mb={1}>
        <Typography variant="body2">Amount and currency you want to valuate:</Typography>
      </Box>
      <Box className={classes.inputWrapper} mb={0.5}>
        <StyledTextField required label="Amount" placeholder="Amount" value={amount} onChange={handleAmountChange} />
        <Box mr={1} />
        <CurrencySelect currencies={currencies} currency={currency} handleSelectChange={handleSelectChange} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', px: 1 }}>
        <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
          {currencyName}
        </Typography>
      </Box>
    </>
  );
};
