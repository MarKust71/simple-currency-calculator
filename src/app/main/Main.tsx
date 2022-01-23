import React, { useEffect, useMemo, useState } from 'react';
import { Box, CssBaseline, SelectChangeEvent, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { MobileContainer } from 'ui/mobileContainer/MobileContainer';
import { DesktopContainer } from 'ui/desktopContainer/DesktopContainer';
import { useDetectDevice } from 'hooks/useDetectDevice/useDetectDevice';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';
import { TReducer } from 'stores';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';
import { CurrencyToValuate } from './currencyToValuate/CurrencyToValuate';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const { isDeviceMobile } = useDetectDevice();
  const { isLoading, setCurrencyCodeFrom } = useCurrencies();

  const classes = useStyles(theme);

  const { currencies, currencyFrom } = useSelector((state: TReducer) => state.currencies);

  const [amount, setAmount] = useState('');
  const [currencyName, setCurrencyName] = useState('');

  const MainContainer: React.FC = useMemo(() => {
    if (isDeviceMobile) {
      return ({ children }) => <MobileContainer>{children}</MobileContainer>;
    }

    return ({ children }) => <DesktopContainer>{children}</DesktopContainer>;
  }, [isDeviceMobile]);

  const handleSelectChange = ({ target }: SelectChangeEvent<string>) => {
    setCurrencyCodeFrom(target.value);
  };

  const handleAmountChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = target.value.replaceAll(',', '.');
    if (value.match(/^\d*\.?\d{0,2}$/)) {
      setAmount(value);
    }
  };

  useEffect(() => {
    if (!Object.entries({ ...currencies })?.length) return;

    // if 'currency' not set, yet, fill 'code' and 'name' with the very first data from the list
    const [firstCurrencyOnList] = Object.entries({ ...currencies });
    const [code, name] = firstCurrencyOnList;

    setCurrencyCodeFrom(code);

    setCurrencyName(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies]);

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
      <CssBaseline />
      <MainContainer>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Typography className={classes.wrapper}>
            <Box component="form" noValidate autoComplete="off">
              <CurrencyToValuate
                amount={amount}
                currencyName={currencyName}
                handleAmountChange={handleAmountChange}
                handleSelectChange={handleSelectChange}
                value={currencyFrom || ''}
              />
            </Box>
          </Typography>
        )}
      </MainContainer>
    </>
  );
};
