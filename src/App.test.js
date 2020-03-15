import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  debugger;
  const linkElement = getByText(/hey/i);
  expect(linkElement).toBeInTheDocument();
});
