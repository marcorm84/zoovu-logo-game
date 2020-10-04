import { func, object, string, bool } from 'prop-types';
import React from 'react';
import { useDrop } from 'react-dnd';
import { LogoItem } from '../LogoItem';
import './styles.scss';

export const Square = ({
  item,
  updateArrays,
  startTimer,
  isFinished,
  className
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: item.type,
    drop: dropedItem => {
      updateArrays(dropedItem.index, item.index);
    },
    canDrop: dropedItem =>
      dropedItem.type === item.type &&
      item.droppable &&
      !dropedItem.droppable &&
      !item.active,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  return (
    <div ref={drop} className={`square-container ${className}`}>
      {item.active && (
        <LogoItem isFinished={isFinished} item={item} startTimer={startTimer} />
      )}
    </div>
  );
};

Square.propTypes = {
  item: object,
  updateArrays: func,
  startTimer: func,
  isFinished: bool,
  className: string
};
