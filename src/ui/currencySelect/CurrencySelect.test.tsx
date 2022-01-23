import React from 'react';
import { render, screen } from '@testing-library/react';

import { CurrencySelect } from './CurrencySelect';

describe('CurrencySelect', () => {
  test('renders', () => {
    render(<CurrencySelect />);
    const element = screen.getByText('CurrencySelect');
    expect(element).toBeInTheDocument();
  });
});
