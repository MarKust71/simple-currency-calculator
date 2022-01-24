import React from 'react';
import { Box, Typography } from '@mui/material';

import { HistoryBoxItemsProps } from './HistoryBoxItems.types';

export const HistoryBoxItems: React.FC<HistoryBoxItemsProps> = ({ history }) => {
  return (
    <>
      {history.map((historyItem, index) => {
        const { currencyCodeFrom, currencyValueFrom, currencyValueTo, currencyCodeTo, date } = historyItem;
        const dayDate = date.substring(0, 10);

        const DateHeader = () => (
          <Box key={date}>
            <Typography variant="h6">{dayDate}</Typography>
          </Box>
        );

        if (index === 0 || dayDate !== history[index - 1].date.substring(0, 10)) {
          return (
            <>
              <DateHeader />
              {/* eslint-disable-next-line max-len */}
              <Typography>{`${currencyValueFrom} ${currencyCodeFrom} is ${currencyValueTo} ${currencyCodeTo}`}</Typography>
            </>
          );
        } else {
          return (
            // eslint-disable-next-line max-len
            <Typography>{`${currencyValueFrom} ${currencyCodeFrom} is ${currencyValueTo} ${currencyCodeTo}`}</Typography>
          );
        }
      })}
    </>
  );
};
