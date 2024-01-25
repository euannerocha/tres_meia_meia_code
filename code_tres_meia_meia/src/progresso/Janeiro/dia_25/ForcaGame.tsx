import React, { useState } from 'react';
import Palavras from './Palavras';
import LetrasUsadas from './LetrasUsadas';

interface ForcaGameProps {
  palavraSecreta: string;
}

const ForcaGame: React.FC<ForcaGameProps> = ({ palavraSecreta }) => {
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);

  const verificarLetra = (letra: string) => {
    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas([...letrasUsadas, letra]);
      if (palavraSecreta.includes(letra)) {
        setLetrasCorretas([...letrasCorretas, letra]);
      }
    }
  };

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <Palavras palavra={palavraSecreta} letrasCorretas={letrasCorretas} />
      <LetrasUsadas letrasUsadas={letrasUsadas} />

      <div>
        <p>Escolha uma letra:</p>
        <input
          type="text"
          maxLength={1}
          onChange={(e) => verificarLetra(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ForcaGame;
