import React from 'react';
import { AppBar, Box, Container, Paper, Typography, useTheme } from '@mui/material';

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
      <Box className={classes.desktopWrapper}>
        <Paper sx={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper }}>{children}</Paper>
      </Box>
    </Container>
  );
};
