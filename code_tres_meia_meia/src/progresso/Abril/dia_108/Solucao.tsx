import React, { useState } from "react";
import { encontrarInterruptor } from ".";

const InterruptorDesafio: React.FC = () => {
  const [resultado, setResultado] = useState<string | null>(null);

  const handleCheck = () => {
    const res = encontrarInterruptor();
    setResultado(
      `Interruptor 1 ${res.primeiro}, Interruptor 2 ${res.segundo}, e Interruptor 3 ${res.terceiro}.`
    );
  };

  return (
    <div>
      <h1>Desafio dos Interruptores</h1>
      <button onClick={handleCheck}>Determinar Interruptor</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default InterruptorDesafio;
