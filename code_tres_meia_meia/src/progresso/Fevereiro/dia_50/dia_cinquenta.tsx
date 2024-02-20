// um programa que receba um número e calcule o fatorial dele, em ts e react

import React, { useState } from 'react';

interface FactorialCalculatorProps {
  onFactorialCalculated: (result: number) => void;
}

const FactorialCalculator: React.FC<FactorialCalculatorProps> = ({ onFactorialCalculated }) => {
  const [number, setNumber] = useState<number | null>(null);

  const calculateFactorial = (num: number) => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const handleCalculate = () => {
    if (number !== null) {
      const result = calculateFactorial(number);
      onFactorialCalculated(result);
    }
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number ?? ''}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={handleCalculate}>Calculate Factorial</button>
    </div>
  );
};

export default FactorialCalculator;
