import React from 'react';
import { useTheme } from '@mui/material';

import { DesktopContainerProps } from './DesktopContainer.types';
import { useStyles } from './DesktopContainer.styles';

export const DesktopContainer: React.FC<DesktopContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <>{children}</>;
};
