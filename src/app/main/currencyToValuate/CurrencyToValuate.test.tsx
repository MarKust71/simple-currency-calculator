import React from 'react';
import { render, screen } from '@testing-library/react';

import { CurrencyToValuate } from './CurrencyToValuate';

describe('CurrencyToValuate', () => {
  test('renders', () => {
    render(<CurrencyToValuate />);
    const element = screen.getByText('CurrencyToValuate');
    expect(element).toBeInTheDocument();
  });
});
