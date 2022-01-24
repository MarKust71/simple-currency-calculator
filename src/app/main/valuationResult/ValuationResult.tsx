import React from 'react';
import { useTheme } from '@mui/material';

import { ValuationResultProps } from './ValuationResult.types';
import { useStyles } from './ValuationResult.styles';

export const ValuationResult: React.FC<ValuationResultProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <>ValuationResult</>;
};
