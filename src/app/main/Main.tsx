import React, { useMemo } from 'react';
import { CssBaseline, Typography, useTheme } from '@mui/material';

import { MobileContainer } from 'ui/mobileContainer/MobileContainer';
import { DesktopContainer } from 'ui/desktopContainer/DesktopContainer';
import { useDetectDevice } from 'hooks/useDetectDevice/useDetectDevice';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isDeviceMobile } = useDetectDevice();

  const MainContainer: React.FC = useMemo(() => {
    if (isDeviceMobile) {
      return ({ children }) => <MobileContainer>{children}</MobileContainer>;
    }

    return ({ children }) => <DesktopContainer>{children}</DesktopContainer>;
  }, [isDeviceMobile]);

  return (
    <>
      <CssBaseline />
      <MainContainer>
        <Typography className={classes.wrapper}>My React Typescript Material-UI Boilerplate</Typography>
      </MainContainer>
    </>
  );
};
