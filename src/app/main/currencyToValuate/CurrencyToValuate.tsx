import React from 'react';
import { Box, SelectChangeEvent, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { StyledTextField } from 'ui/styledTextField/StyledTextField';
import { CurrencySelect } from 'ui/currencySelect/CurrencySelect';
import { TReducer } from 'stores';
import { setCurrencyAmount } from 'stores/currenciesStore/currenciesActionCreators';
import { isNumberValid } from 'helpers/isNumberValid';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

import { useStyles } from './CurrencyToValuate.styles';

export const CurrencyToValuate = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useDispatch();
  const { currencyNameFrom, setCurrencyCodeFrom } = useCurrencies();

  const { currencies, amount, currencyFrom } = useSelector((state: TReducer) => state.currencies);

  const handleAmountChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = target.value.replaceAll(',', '.');

    if (isNumberValid(value)) {
      dispatch(
        setCurrencyAmount({
          ...currencies,
          amount: value,
        }),
      );
    }
  };

  const handleChange = ({ target }: SelectChangeEvent<string>) => {
    setCurrencyCodeFrom(target.value);
  };

  return (
    <>
      <Box mb={1}>
        <Typography variant="body2">Amount and currency you want to valuate:</Typography>
      </Box>
      <Box className={classes.inputWrapper} mb={0.5}>
        <StyledTextField required label="Amount" placeholder="Amount" value={amount} onChange={handleAmountChange} />
        <Box mr={1} />
        <CurrencySelect value={currencyFrom || ''} onChange={handleChange} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', px: 1 }}>
        <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
          {currencyNameFrom}
        </Typography>
      </Box>
    </>
  );
};
