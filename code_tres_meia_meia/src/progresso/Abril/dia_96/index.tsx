import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialTime: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTime]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1>Countdown</h1>
      <p>Time left: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Countdown;
