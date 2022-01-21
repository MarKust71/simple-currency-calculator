import React from 'react';
import { render, screen } from '@testing-library/react';

import { MobileContainer } from './MobileContainer';

describe('MobileContainer', () => {
  test('renders', () => {
    render(<MobileContainer />);
    const element = screen.getByText('MobileContainer');
    expect(element).toBeInTheDocument();
  });
});
