import React from 'react';
import { Container, useTheme } from '@mui/material';

import { CommonAppBar } from 'ui/commonAppBar/CommonAppBar';

import { MobileContainerProps } from './MobileContainer.types';
import { useStyles } from './MobileContainer.styles';

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container className={classes.container}>
      <CommonAppBar />
      {children}
    </Container>
  );
};
