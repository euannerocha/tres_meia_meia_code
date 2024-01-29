//Ideia
//Typescript + react: cria uma calculadora de operações básicas

import React, { useState } from 'react';

interface CalculatorProps {
  onResultChange: (result: number | null) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onResultChange }) => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        onResultChange(eval(input));
      } catch (error) {
        onResultChange(null);
      }
    } else if (value === 'C') {
      setInput('');
      onResultChange(null);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
