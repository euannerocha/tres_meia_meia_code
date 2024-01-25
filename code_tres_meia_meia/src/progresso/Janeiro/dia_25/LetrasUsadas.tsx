import React from 'react';

interface LetrasUsadasProps {
  letrasUsadas: string[];
}

const LetrasUsadas: React.FC<LetrasUsadasProps> = ({ letrasUsadas }) => {
  return (
    <div>
      <p>Letras Usadas:</p>
      <p>{letrasUsadas.join(', ')}</p>
    </div>
  );
};

export default LetrasUsadas;
