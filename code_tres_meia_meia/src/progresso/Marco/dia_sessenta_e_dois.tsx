import React, { useState } from "react";

const frasesButton: React.FC = () => {
  const frases: string[] = [
"Vai te fuder",
"Eu gosto de peixe",
"Eu amo xis",
"Pega no meu pau"
    ];

  const [fraseDoMomento,setFraseDoMomento] = useState<string>(
    frases[0]
  );

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

export default frasesButton;