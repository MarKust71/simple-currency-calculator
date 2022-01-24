import React from 'react';
import { Box, Container, Paper, useTheme } from '@mui/material';

import { CommonAppBar } from 'ui/commonAppBar/CommonAppBar';

import { DesktopContainerProps } from './DesktopContainer.types';
import { useStyles } from './DesktopContainer.styles';

export const DesktopContainer: React.FC<DesktopContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container className={classes.container}>
      <CommonAppBar />
      <Box className={classes.desktopWrapper}>
        <Paper sx={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper }}>{children}</Paper>
      </Box>
    </Container>
  );
};
