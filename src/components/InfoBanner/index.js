import React from 'react';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import { string, number, bool } from 'prop-types';
import './styles.scss';

export const InfoBanner = ({ seconds, username, isFinished }) => (
  <div className="info-margin-top">
    <div className="info-row">
      <div className="info-username">Good Luck, {username}!</div>
      {isFinished && (
        <div className="info-score">
          <QueryBuilder style={{ color: 'green' }} /> Your score: {seconds}{' '}
          seconds
        </div>
      )}
    </div>
    <div className="info-row info-subtitle">
      <span>Pick up the right cards</span>
      <span>The faster the better!</span>
    </div>
  </div>
);

InfoBanner.propTypes = {
  username: string,
  seconds: number,
  isFinished: bool
};
