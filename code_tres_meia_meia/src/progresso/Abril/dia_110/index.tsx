import { useState } from "react";

export function Guess() {
  const [numberToGuess, setNumberToGuess] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "Tente adivinhar um número entre 1 e 100!"
  );

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (numGuess > numberToGuess) {
      setMessage("Um pouco alto! Tente novamente.");
    } else if (numGuess < numberToGuess) {
      setMessage("Um pouco baixo! Tente novamente.");
    } else {
      setMessage("Parabéns! Você acertou!");
      setNumberToGuess(Math.floor(Math.random() * 100) + 1);
    }
    setGuess("");
  };

  return (
    <>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Insira seu palpite"
      />
      <button onClick={handleGuess}>Verificar</button>
    </>
  );
}
