import React from 'react';
import { render, screen } from '@testing-library/react';

import { CurrencyToValuate } from './CurrencyToValuate';

describe('CurrencyToValuate', () => {
  test('renders', () => {
    render(
      <CurrencyToValuate
        value={''}
        currencyName={''}
        amount={''}
        handleSelectChange={() => null}
        handleAmountChange={() => null}
      />,
    );
    const element = screen.getByText('CurrencyToValuate');
    expect(element).toBeInTheDocument();
  });
});
