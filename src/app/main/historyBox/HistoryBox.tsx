import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { TReducer } from 'stores';

import { HistoryBoxProps } from './HistoryBox.types';
import { useStyles } from './HistoryBox.styles';
import { HistoryBoxItems } from './historyBoxItems/HistoryBoxItems';

export const HistoryBox: React.FC<HistoryBoxProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { history } = useSelector((state: TReducer) => state.history);

  return (
    <>
      <Box mb={1}>
        <Typography variant="body2">History:</Typography>
      </Box>
      <Box className={classes.container}>
        <HistoryBoxItems history={history} />
      </Box>
    </>
  );
};
