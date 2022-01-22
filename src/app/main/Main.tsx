import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { MobileContainer } from 'ui/mobileContainer/MobileContainer';
import { DesktopContainer } from 'ui/desktopContainer/DesktopContainer';
import { useDetectDevice } from 'hooks/useDetectDevice/useDetectDevice';
import { useCurrencies } from 'hooks/useCurrencies/useCurrencies';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    textAlign: 'end',
  },
});

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const { isDeviceMobile } = useDetectDevice();
  const { isLoading, getCurrencies, currencies } = useCurrencies();

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
    getCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.entries(currencies).length && !currency) {
      const [entry] = Object.entries(currencies);
      setCurrency(entry[0].toUpperCase());
      setCurrencyName(entry[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies]);

  useEffect(() => {
    if (!currency) return;

    const entries = Object.entries(currencies).filter((entry) => entry[0] === currency);

    if (!entries.length) return;
    setCurrencyName(Object.entries(currencies).filter((entry) => entry[0] === currency)[0][1]);
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
              <Box mb={1}>
                <Typography variant="body2">Amount and currency you want to valuate:</Typography>
              </Box>
              <Box className={classes.inputWrapper} mb={0.5}>
                <StyledTextField
                  required
                  label="Amount"
                  placeholder="Amount"
                  value={amount}
                  onChange={handleAmountChange}
                />
                <Box mr={1} />
                <Box sx={{ width: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                      label="Currency"
                      value={currency}
                      defaultValue=""
                      onChange={handleSelectChange}
                      renderValue={(value) => value.toUpperCase()}
                    >
                      {Object.entries(currencies).map((entry) => {
                        const [code, name] = entry;
                        return (
                          <MenuItem key={code} value={code}>
                            {`${code.toUpperCase()} ${name}`}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', px: 1 }}>
                <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
                  {currencyName}
                </Typography>
              </Box>
            </Box>
          </Typography>
        )}
      </MainContainer>
    </>
  );
};
