import React from 'react';
import { render } from '@testing-library/react';
import { InfoBanner } from '.';

test('display username and seconds', () => {
  const { getByText } = render(
    <InfoBanner seconds={12} username={'Robert Plant'} />
  );

  expect(getByText('Good Luck, Robert Plant!')).toBeInTheDocument();
  expect(getByText('Your score: 12 seconds')).toBeInTheDocument();
});
