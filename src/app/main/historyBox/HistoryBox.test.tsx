import React from 'react';
import { render, screen } from '@testing-library/react';

import { HistoryBox } from './HistoryBox';

describe('HistoryBox', () => {
  test('renders', () => {
    render(<HistoryBox />);
    const element = screen.getByText('HistoryBox');
    expect(element).toBeInTheDocument();
  });
});
