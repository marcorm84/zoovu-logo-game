import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { InfoBanner, Square, ExtraInfo } from '../../components';
import { LOGO_TYPES } from '../../constants';
import { initSquare, shuffleElements, isFinished } from '../../utils';
import './styles.scss';

export const Game = ({ username }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initSquares, setInitSquares] = useState([]);
  const [targetSquares, setTargetSquares] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateArrays = (initIndex, targetIndex) => {
    setLoading(true);
    initSquares[initIndex] = { ...initSquares[initIndex], active: false };
    targetSquares[targetIndex] = {
      ...targetSquares[targetIndex],
      active: true
    };
    setInitSquares(initSquares);
    setTargetSquares(targetSquares);
    setLoading(false);
    if (isFinished(targetSquares)) setIsActive(false);
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
          isFinished={isFinished(targetSquares)}
        ></Square>
      ))}
    </div>
  );

  useEffect(() => {
    // Initialice both arrays
    setInitSquares(
      shuffleElements(LOGO_TYPES).map((logoType, index) =>
        initSquare(true, logoType, index)
      )
    );
    setTargetSquares(
      LOGO_TYPES.map((logoType, index) => initSquare(false, logoType, index))
    );
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
            <InfoBanner username={username} seconds={seconds} />
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
