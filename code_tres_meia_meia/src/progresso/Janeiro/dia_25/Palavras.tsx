import React from 'react';

interface PalavraProps {
  palavra: string;
  letrasCorretas: string[];
}

const Palavra: React.FC<PalavraProps> = ({ palavra, letrasCorretas }) => {
  const exibirPalavra = palavra
    .split('')
    .map((letra, index) =>
      letrasCorretas.includes(letra) ? (
        <span key={index}>{letra}</span>
      ) : (
        <span key={index}>_</span>
      )
    );

  return <div>{exibirPalavra}</div>;
};

export default Palavra;
