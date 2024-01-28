//Ideia
//TypeScript + react: crie um botao de contador.

import React from 'react';

interface ContadorButtonProps {
  onClick: () => void;
  contador: number;
}

const ContadorButton: React.FC<ContadorButtonProps> = ({ onClick, contador }) => {
  return (
    <button onClick={onClick}>
      Você clicou em mim {contador} {contador === 1 ? 'vez' : 'vezes'}
    </button>
  );
};

export default ContadorButton;


