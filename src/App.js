// App.js
import React from 'react';
import { TimerProvider } from './TimerContext';
import TimerDisplay from './TimerDisplay';

const App = () => {
  return (
    <TimerProvider>
      <TimerDisplay />
    </TimerProvider>
  );
};

export default App;
