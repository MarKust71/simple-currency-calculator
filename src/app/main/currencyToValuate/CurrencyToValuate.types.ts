import React from 'react';

export type CurrencyToValuateProps = {
  amount: string;
  handleAmountChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};
