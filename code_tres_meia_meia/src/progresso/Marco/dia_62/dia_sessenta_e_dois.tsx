import React, { useState } from "react";

const FrasesButton: React.FC = () => {
  const frases: string[] = [
    "A vida é linda, mas às vezes não.",
    "Eu gosto de peixe.",
    "Eu amo xis.",
  ];

  const [fraseDoMomento, setFraseDoMomento] = useState<string>(frases[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFraseDoMomento(frases[randomIndex]);
  };

  return (
    <div>
      <p>{fraseDoMomento}</p>
      <button onClick={handleClick}>Nova Frase</button>
    </div>
  );
};

export default FrasesButton;
