//Ideia
//React + Typescript: Criar um jogo de adivinhação de npúmero de 1 a 100.

import React, { useState } from 'react';

type GuessingGameState = 'start' | 'won' | 'lost';

const GuessingGame: React.FC = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [gameState, setGameState] = useState<GuessingGameState>('start');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    if (guess !== null) {
      setAttempts(attempts + 1);

      if (guess === secretNumber) {
        setGameState('won');
      } else if (attempts >= 0) {
        setGameState('lost');
      }
    }
  }

  function resetGame() {
    setSecretNumber(generateRandomNumber());
    setGuess(null);
    setAttempts(0);
    setGameState('start');
  }

  return (
    <div>
      {gameState === 'start' && (
        <>
          <p>Tente adivinhar o número entre 1 e 100:</p>
          <input
            type="number"
            value={guess || ''}
            onChange={(e) => setGuess(parseInt(e.target.value, 10) || null)}
          />
          <button onClick={handleGuess}>Enviar Palpite</button>
        </>
      )}

      {gameState === 'won' && (
        <>
          <p>Parabéns! Você acertou o número em {attempts} tentativas.</p>
          <button onClick={resetGame}>Jogar Novamente</button>
        </>
      )}

      {gameState === 'lost' && (
        <>
          <p>Game Over! Você não conseguiu adivinhar o número. O número era {secretNumber}.</p>
          <button onClick={resetGame}>Tentar Novamente</button>
        </>
      )}
    </div>
  );
};

export default GuessingGame;