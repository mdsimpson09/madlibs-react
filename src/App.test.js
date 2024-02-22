
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mad Libs heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Mad Libs/i);
  expect(headingElement).toBeInTheDocument();
});