import React, { useEffect, useState } from "react";

const AcerteALetra: React.FC = () => {
  const [letterOfTheDay, setLetterOfTheDay] = useState<string>("");
  const [guess, setGuess] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const generateRandomLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  useEffect(() => {
    setLetterOfTheDay(generateRandomLetter());
  }, []);

  const handleGuess = () => {
    if (guess.toUpperCase() === letterOfTheDay) {
      setResult(`Você acertou! A letra do dia é: ${letterOfTheDay}`);
    } else {
      setResult("Tente novamente.");
    }
    setGuess("");
  };

  return (
    <div>
      <h1>Jogo de Adivinhação da Letra do Dia</h1>
      <p>Adivinhe qual é a letra do dia (A-Z):</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={1}
        style={{ textTransform: "uppercase" }}
      />
      <button onClick={handleGuess}>Verificar</button>
      <p>{result}</p>
    </div>
  );
};

export default AcerteALetra;
