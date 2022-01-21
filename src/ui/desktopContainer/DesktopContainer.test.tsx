import React from 'react';
import { render, screen } from '@testing-library/react';

import { DesktopContainer } from './DesktopContainer';

describe('DesktopContainer', () => {
  test('renders', () => {
    render(<DesktopContainer />);
    const element = screen.getByText('DesktopContainer');
    expect(element).toBeInTheDocument();
  });
});
