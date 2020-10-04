import React, { useState } from 'react';
import { func } from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import './styles.scss';

export const Welcome = ({ setUsername }) => {
  const [value, setValue] = useState('');
  return (
    <div className="welcome-container wrapper">
      <div className="welcome-content">
        <h3>Hello friend, tell me your name...</h3>
        <TextField
          value={value}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
          onChange={({ target }) => {
            setValue(target.value);
          }}
          className="welcome-input"
          placeholder="Your name here"
        />
        <Button
          variant="contained"
          onClick={() => setUsername(value)}
          className="welcome-button"
          endIcon={<ArrowRightAlt fontSize="large" />}
        >
          Let's go
        </Button>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  setUsername: func
};
