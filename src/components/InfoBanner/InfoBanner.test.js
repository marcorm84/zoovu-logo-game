import React from 'react';
import { render } from '@testing-library/react';
import { InfoBanner } from '.';

test('display username and seconds', () => {
  const { getByText, queryByText, rerender } = render(
    <InfoBanner seconds={12} username={'Robert Plant'} isFinished={true} />
  );
  expect(getByText('Good Luck, Robert Plant!')).toBeInTheDocument();
  expect(getByText('Your score: 12 seconds')).toBeInTheDocument();

  rerender(
    <InfoBanner seconds={12} username={'Robert Plant'} isFinished={false} />
  );
  expect(queryByText('Your score: 12 seconds')).not.toBeInTheDocument();
});
