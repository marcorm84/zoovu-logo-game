import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Welcome } from '.';

test('button triggers on click', () => {
  const setUsername = jest.fn();

  const { getByTestId } = render(<Welcome setUsername={setUsername} />);

  fireEvent.click(getByTestId('continue-button'));

  expect(setUsername).toHaveBeenCalled();
});

test('have all components', () => {
  const setUsername = jest.fn();

  const { getByTestId, getByText } = render(
    <Welcome setUsername={setUsername} />
  );

  expect(getByTestId('continue-button')).toBeInTheDocument();
  expect(getByText('Hello friend, tell me your name...')).toBeInTheDocument();
  expect(getByTestId('text-input')).toBeInTheDocument();
});
