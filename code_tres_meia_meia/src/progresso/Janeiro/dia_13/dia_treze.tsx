//Ideia
//Typescript: Construir um componente de barra de progresso que aumente conforme um valor definido.

import React, { CSSProperties } from 'react';

interface BarraProgressoProps {
  valor: number;
}

const BarraProgresso: React.FC<BarraProgressoProps> = ({ valor }) => {
  const estiloBarra: CSSProperties = {
    width: `${valor}%`,
    height: '20px',
    backgroundColor: '#4CAF50',
    textAlign: 'center',
    lineHeight: '20px',
    color: 'white',
  };

  return (
    <div style={estiloBarra}>
      {valor}%
    </div>
  );
};

export default BarraProgresso;

