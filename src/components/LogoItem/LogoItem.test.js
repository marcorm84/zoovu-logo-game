import React from 'react';
import { render } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { LogoItem } from '.';
import LogoV from '../../assets/svg/zoovu-v.svg';

test('show image', () => {
  const startTimer = jest.fn();
  const isFinished = false;
  const item = {
    type: 'test',
    image: LogoV,
    index: 1,
    droppable: true
  };

  const { getByAltText } = render(
    <DndProvider backend={HTML5Backend}>
      <LogoItem item={item} startTimer={startTimer} isFinished={isFinished} />
    </DndProvider>
  );

  expect(getByAltText('React Logo')).toBeInTheDocument();
});
