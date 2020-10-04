import React, { useState } from 'react';
import { WelcomeScreen, GameScreen } from './screens';
import './App.scss';

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <>
      {username ? (
        <GameScreen username={username} />
      ) : (
        <WelcomeScreen setUsername={setUsername} />
      )}
    </>
  );
};

export default App;
