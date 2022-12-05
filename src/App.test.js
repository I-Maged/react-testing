import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('Increment button', () => {
    render(<App />);
    const incButton = screen.getByRole('button', { name: 'Increment' });

    userEvent.click(incButton);

    expect(screen.getByRole('heading').textContent).toMatch(/1/i);
  });

  test('Decrement button', () => {
    render(<App />);
    const decButton = screen.getByRole('button', { name: 'Decrement' });

    userEvent.click(decButton);

    expect(screen.getByRole('heading').textContent).toMatch(/-1/i);
  });
});
