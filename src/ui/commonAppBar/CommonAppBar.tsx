import React from 'react';
import { AppBar, Box, CircularProgress, Typography, useTheme } from '@mui/material';

import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

import { useStyles } from './CommonAppBar.styles';

export const CommonAppBar = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isLoading } = useCurrencies();

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.wrapper}>
        <Typography variant="h4">Hello StackBlitz!</Typography>
        {isLoading && (
          <>
            <Box mr={2} />
            <CircularProgress className={classes.progresBar} size={30} />
          </>
        )}
      </Box>
      <Typography variant="body1">the tiny currency converter</Typography>
    </AppBar>
  );
};
