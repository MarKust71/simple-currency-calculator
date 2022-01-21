import React from 'react';
import { AppBar, Container, Typography, useTheme } from '@mui/material';

import { DesktopContainerProps } from './DesktopContainer.types';
import { useStyles } from './DesktopContainer.styles';

export const DesktopContainer: React.FC<DesktopContainerProps> = ({ children }) => {
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
