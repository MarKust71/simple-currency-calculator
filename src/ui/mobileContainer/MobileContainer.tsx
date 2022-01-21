import React from 'react';
import { AppBar, Container, Typography, useTheme } from '@mui/material';

import { MobileContainerProps } from './MobileContainer.types';
import { useStyles } from './MobileContainer.styles';

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container className={classes.container}>
      <AppBar className={classes.appBar}>
        <Typography variant="h4">Hello StackBlitz!</Typography>
        <Typography variant="body1">the tiny currency converter</Typography>
      </AppBar>
      {children}
    </Container>
  );
};
