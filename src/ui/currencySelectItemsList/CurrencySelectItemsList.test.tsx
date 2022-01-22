import React from 'react';
import { render, screen } from '@testing-library/react';

import { CurrencySelectItemsList } from './CurrencySelectItemsList';

describe('CurrencySelectItemsList', () => {
  test('renders', () => {
    render(<CurrencySelectItemsList currencies={{}} />);
    const element = screen.getByText('CurrencySelectItemsList');
    expect(element).toBeInTheDocument();
  });
});
