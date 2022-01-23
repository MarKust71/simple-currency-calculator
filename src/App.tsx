import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from 'theme/theme';
import { Main } from 'app/main/Main';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

export const App = () => {
  const { getCurrencies } = useCurrencies();

  useEffect(() => {
    getCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};
