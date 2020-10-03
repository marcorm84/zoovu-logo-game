import React, { useEffect } from 'react';
import { string } from 'prop-types';

export const Game = ({ username }) => {
  return (
    <div>
      <div>Good Luck, {username}!</div>
      <div>Your score:</div>
    </div>
  );
};

Game.propTypes = {
  username: string
};
