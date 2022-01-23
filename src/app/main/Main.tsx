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
  const { currencies } = useSelector((state: TReducer) => state.currencies);

  const theme = useTheme();
  const { isDeviceMobile } = useDetectDevice();
  const { isLoading } = useCurrencies();

  const classes = useStyles(theme);

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencyName, setCurrencyName] = useState('');

  const MainContainer: React.FC = useMemo(() => {
    if (isDeviceMobile) {
      return ({ children }) => <MobileContainer>{children}</MobileContainer>;
    }

    return ({ children }) => <DesktopContainer>{children}</DesktopContainer>;
  }, [isDeviceMobile]);

  const handleSelectChange = ({ target }: SelectChangeEvent<string>) => {
    setCurrency(target.value);
  };

  const handleAmountChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = target.value.replaceAll(',', '.');
    if (value.match(/^\d*\.?\d{0,2}$/)) {
      setAmount(value);
    }
  };

  useEffect(() => {
    if (Object.entries({ ...currencies }).length && !currency) {
      const [entry] = Object.entries({ ...currencies });
      setCurrency(entry[0].toUpperCase());
      setCurrencyName(entry[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies]);

  useEffect(() => {
    if (!currency) return;

    const entries = Object.entries({ ...currencies }).filter((entry) => entry[0] === currency);

    if (!entries.length) return;
    setCurrencyName(Object.entries({ ...currencies }).filter((entry) => entry[0] === currency)[0][1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

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
                currencies={{ ...currencies }}
                amount={amount}
                currency={currency}
                currencyName={currencyName}
                handleAmountChange={handleAmountChange}
                handleSelectChange={handleSelectChange}
              />
            </Box>
          </Typography>
        )}
      </MainContainer>
    </>
  );
};
