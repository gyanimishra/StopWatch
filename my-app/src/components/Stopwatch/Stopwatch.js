import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    clearInterval(intervalRef.current);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time - minutes * 60000) / 1000);
    const milliseconds = Math.floor((time - minutes * 60000 - seconds * 1000) / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      {!isRunning && <button onClick={startTimer}>Start</button>}
      {isRunning && <button onClick={stopTimer}>Stop</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
