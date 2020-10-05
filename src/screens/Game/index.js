import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { InfoBanner, Square, ExtraInfo } from '../../components';
import { LOGO_TYPES } from '../../constants';
import { initSquare, shuffleElements } from '../../utils';
import './styles.scss';

export const Game = ({ username }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initSquares, setInitSquares] = useState([]);
  const [targetSquares, setTargetSquares] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFinished = () => {
    return targetSquares.every(item => item.match);
  };

  const initGame = () => {
    // Initialice both arrays
    setInitSquares(
      shuffleElements(LOGO_TYPES).map((logoType, index) =>
        initSquare(true, logoType, index)
      )
    );
    setTargetSquares(
      LOGO_TYPES.map((logoType, index) => initSquare(false, logoType, index))
    );
    setSeconds(0);
  };

  const updateArrays = (origin, target) => {
    setLoading(true);
    const match = (origin.activeType || origin.type) === target.type;
    if (!match) {
      // If it does not match, 10 extra seconds
      setSeconds(seconds + 10);
    }
    const auxInitSquares = !origin.droppable ? initSquares : targetSquares;
    auxInitSquares[origin.index] = {
      ...auxInitSquares[origin.index],
      active: target.active,
      match: target.active && match,
      activeImage: target.activeImage,
      activeType: target.active ? target.activeType || target.type : null
    };
    targetSquares[target.index] = {
      ...targetSquares[target.index],
      active: true,
      match,
      activeImage: origin.droppable ? origin.activeImage : origin.image,
      activeType: origin.activeType || origin.type
    };
    if (!origin.droppable) {
      setInitSquares(auxInitSquares);
    }
    setTargetSquares(targetSquares);
    setLoading(false);
    if (isFinished()) {
      setIsActive(false);
      setTimeout(() => initGame(), 10000);
    }
  };

  const renderLogoItems = (logos, classes) => (
    <div className="game-items-row">
      {logos.map(logo => (
        <Square
          key={`sq-${logo.key}-${logo.droppable}`}
          startTimer={() => setIsActive(true)}
          updateArrays={updateArrays}
          item={logo}
          className={classes}
          isFinished={isFinished()}
        ></Square>
      ))}
    </div>
  );

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    // Handle Timer
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="wrapper">
      <DndProvider backend={HTML5Backend}>
        {!loading && (
          <div className="game-wrapper wrapper">
            <InfoBanner
              username={username}
              seconds={seconds}
              isFinished={isFinished()}
            />
            {renderLogoItems(initSquares, 'init-squares')}
            <ExtraInfo />
            {renderLogoItems(targetSquares, 'target-squares')}
          </div>
        )}
      </DndProvider>
    </div>
  );
};

Game.propTypes = {
  username: string
};
