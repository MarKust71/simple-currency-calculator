import React from 'react';
import { render, screen } from '@testing-library/react';

import { StyledTextField } from './StyledTextField';

describe('StyledTextField', () => {
  test('renders', () => {
    render(<StyledTextField />);
    const element = screen.getByText('StyledTextField');
    expect(element).toBeInTheDocument();
  });
});
