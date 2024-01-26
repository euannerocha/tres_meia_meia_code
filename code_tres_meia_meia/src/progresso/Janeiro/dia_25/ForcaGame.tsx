//Ideia
//TypeScript: Desenvolver um validador de formulário com tipos específicos para campos obrigatórios.

import React, { useState } from 'react';
import Palavras from './Palavras';
import LetrasUsadas from './LetrasUsadas';

interface ForcaGameProps {
  palavraSecreta: string;
}

const ForcaGame: React.FC<ForcaGameProps> = ({ palavraSecreta }) => {
  const [letraDigitada, setLetraDigitada] = useState<string>('');
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);

  const verificarLetra = () => {
    const letra = letraDigitada.toUpperCase();

    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas([...letrasUsadas, letra]);
      if (palavraSecreta.toUpperCase().includes(letra)) {
        setLetrasCorretas([...letrasCorretas, letra]);
      }
    }

    setLetraDigitada('');
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
          value={letraDigitada}
          onChange={(e) => setLetraDigitada(e.target.value)}
        />
        <button onClick={verificarLetra}>Enviar</button>
      </div>
    </div>
  );
};

export default ForcaGame;
