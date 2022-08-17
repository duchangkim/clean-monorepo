import React from 'react';
import { render, screen } from '@testing-library/react';
import { Start } from './Start';

test('renders learn react link', () => {
  render(<Start />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
