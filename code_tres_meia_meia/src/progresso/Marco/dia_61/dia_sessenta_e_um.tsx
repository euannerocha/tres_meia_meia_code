import React, { useState } from "react";

const MotivationalButton: React.FC = () => {
  const motivationalPhrases: string[] = [
    "A jornada para o sucesso começa com um único passo. Dê esse passo hoje e avance em direção aos seus sonhos.",
    "Não limite seus desafios, desafie seus limites. Você é mais forte do que imagina.",
    "Acredite no poder dos seus sonhos. Eles são o combustível que impulsiona você na direção dos seus objetivos.",
    "As maiores conquistas surgem da persistência. Continue seguindo em frente, mesmo quando parecer difícil.",
    "Cada obstáculo é uma oportunidade de crescimento. Encare-os de frente e transforme desafios em triunfos.",
    "O sucesso não é uma linha reta, mas sim uma jornada cheia de altos e baixos. Mantenha-se firme e continue avançando.",
    "Não permita que o medo de falhar o impeça de tentar. O fracasso é apenas uma parte do caminho para o sucesso.",
    "Seja a mudança que você deseja ver no mundo. Suas ações têm o poder de fazer a diferença.",
    "Não espere por oportunidades, crie-as. O destino está em suas mãos.",
    "O segredo do progresso é começar. Não espere pelas condições perfeitas, comece onde você está com o que tem.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState<string>(
    motivationalPhrases[0]
  );

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    setCurrentPhrase(motivationalPhrases[randomIndex]);
  };

  return (
    <div>
      <p>{currentPhrase}</p>
      <button onClick={handleClick}>Nova Frase Motivacional</button>
    </div>
  );
};

export default MotivationalButton;
