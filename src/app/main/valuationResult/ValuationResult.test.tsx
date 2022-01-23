import React from 'react';
import { render, screen } from '@testing-library/react';

import { ValuationResult } from './ValuationResult';

describe('ValuationResult', () => {
  test('renders', () => {
    render(<ValuationResult />);
    const element = screen.getByText('ValuationResult');
    expect(element).toBeInTheDocument();
  });
});
