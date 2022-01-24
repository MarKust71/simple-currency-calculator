import React from 'react';
import { render, screen } from '@testing-library/react';

import { CommonAppBar } from './CommonAppBar';

describe('CommonAppBar', () => {
  test('renders', () => {
    render(<CommonAppBar />);
    const element = screen.getByText('CommonAppBar');
    expect(element).toBeInTheDocument();
  });
});
