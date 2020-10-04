import { func, object, bool } from 'prop-types';
import React from 'react';
import { useDrag } from 'react-dnd';
import './styles.scss';

export const LogoItem = ({
  item: { type, image, index, droppable },
  startTimer,
  isFinished
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type, index, droppable },
    begin: () => {
      if (!isFinished) {
        startTimer();
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}
    >
      <img className="logo-image" src={image} alt="React Logo" />
    </div>
  );
};

LogoItem.propTypes = {
  item: object,
  startTimer: func,
  isFinished: bool
};
