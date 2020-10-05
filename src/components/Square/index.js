import { func, object, string, bool } from 'prop-types';
import React from 'react';
import { useDrop } from 'react-dnd';
import { LogoItem } from '../LogoItem';
import './styles.scss';

const activeCondition = (init, target) => {
  if (!init.droppable) return !target.active;
  return true;
};

export const Square = ({
  item,
  updateArrays,
  startTimer,
  isFinished,
  className
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['z', 'o', 'v', 'u'],
    drop: dropedItem => {
      updateArrays(dropedItem, item);
    },
    canDrop: dropedItem => item.droppable && activeCondition(dropedItem, item),
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
