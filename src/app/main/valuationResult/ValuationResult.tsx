import React from 'react';
import { Box, SelectChangeEvent, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { StyledTextField } from 'ui/styledTextField/StyledTextField';
import { CurrencySelect } from 'ui/currencySelect/CurrencySelect';
import { TReducer } from 'stores';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

import { ValuationResultProps } from './ValuationResult.types';
import { useStyles } from './ValuationResult.styles';

export const ValuationResult: React.FC<ValuationResultProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { currencyNameTo, setCurrencyCodeTo, result } = useCurrencies();

  const { currencyTo } = useSelector((state: TReducer) => state.currencies);

  const handleChange = ({ target }: SelectChangeEvent<string>) => {
    setCurrencyCodeTo(target.value);
  };

  return (
    <>
      <Box mb={1}>
        <Typography variant="body2">Calculation result:</Typography>
      </Box>
      <Box className={classes.inputWrapper} mb={0.5}>
        <StyledTextField label="Result" placeholder="Result" value={result} />
        <Box mr={1} />
        <CurrencySelect value={currencyTo || ''} onChange={handleChange} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', px: 1 }}>
        <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
          {currencyNameTo}
        </Typography>
      </Box>
    </>
  );
};
