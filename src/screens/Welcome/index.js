import React, { useState } from 'react';
import { func } from 'prop-types';
import styles from './styles.scss';

export const Welcome = ({ setUsername }) => {
  const [value, setValue] = useState('');
  return (
    <div style={styles.welcomeContainer}>
      <div>Hello friend, tell me your name...</div>
      <input
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        type="text"
      />
      <button onClick={() => setUsername(value)}>Let's go</button>
    </div>
  );
};

Welcome.propTypes = {
  setUsername: func
};
