import React, { useEffect, useMemo } from 'react';
import { Box, CssBaseline, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { MobileContainer } from 'ui/mobileContainer/MobileContainer';
import { DesktopContainer } from 'ui/desktopContainer/DesktopContainer';
import { useDetectDevice } from 'hooks/useDetectDevice/useDetectDevice';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';
import { TReducer } from 'stores';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';
import { CurrencyToValuate } from './currencyToValuate/CurrencyToValuate';
import { ValuationResult } from './valuationResult/ValuationResult';
import { HistoryBox } from './historyBox/HistoryBox';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const { isDeviceMobile } = useDetectDevice();
  const { setCurrencyCodeFrom, setCurrencyCodeTo } = useCurrencies();

  const classes = useStyles(theme);

  const { currencies, currencyFrom, amount } = useSelector((state: TReducer) => state.currencies);

  const MainContainer: React.FC = useMemo(() => {
    if (isDeviceMobile) {
      return ({ children }) => <MobileContainer>{children}</MobileContainer>;
    }

    return ({ children }) => <DesktopContainer>{children}</DesktopContainer>;
  }, [isDeviceMobile]);

  useEffect(() => {
    if (!Object.entries({ ...currencies })?.length) return;

    // if 'currency' not set, yet, fill 'code' and 'name' with the very first data from the list
    const [firstCurrencyOnList] = Object.entries({ ...currencies });
    const [code] = firstCurrencyOnList;

    setCurrencyCodeFrom(code);
    setCurrencyCodeTo(code);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies]);

  return (
    <>
      <CssBaseline />
      <MainContainer>
        <Typography className={classes.wrapper}>
          <Box component="form" noValidate autoComplete="off">
            <CurrencyToValuate />
            {!!currencyFrom && !!amount && !!parseFloat(`${amount}`) && (
              <>
                <Box mb={1} />
                <ValuationResult />
                <Box mb={1} />
                <HistoryBox />
              </>
            )}
          </Box>
        </Typography>
      </MainContainer>
    </>
  );
};
