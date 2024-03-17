import React, { useState, useRef } from "react";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <div>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
