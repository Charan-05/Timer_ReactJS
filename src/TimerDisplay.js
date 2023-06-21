// TimerDisplay.js
import React, { useContext } from 'react';
import { TimerContext } from './TimerContext';

const TimerDisplay = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } =
    useContext(TimerContext);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{formatTime(time)}</p>
      {!isRunning && (
        <button onClick={startTimer}>Resume</button>
      )}
      {isRunning && (
        <>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset & Start</button>
        </>
      )}
    </div>
  );
};

export default TimerDisplay;
