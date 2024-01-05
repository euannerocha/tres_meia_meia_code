import React, { useState } from 'react';

export function BotaoColorido() {
  const [cor, setCor] = useState('red');

  const trocarCor = () => {
    const novasCores = ['blue', 'green', 'yellow', 'orange'];
    const novaCor = novasCores[Math.floor(Math.random() * novasCores.length)];
    setCor(novaCor);
  };

  return (
    <button
      style={{ backgroundColor: cor, padding: '10px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}
      onClick={trocarCor}
    >
      Oi, eu sou um botão!
    </button>
  );
};
