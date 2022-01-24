import React from 'react';
import { render, screen } from '@testing-library/react';

import { HistoryBoxItems } from './HistoryBoxItems';

describe('HistoryBoxItems', () => {
  test('renders', () => {
    render(<HistoryBoxItems history={[]} />);
    const element = screen.getByText('HistoryBoxItems');
    expect(element).toBeInTheDocument();
  });
});
