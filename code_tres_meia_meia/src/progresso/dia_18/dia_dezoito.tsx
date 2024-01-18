//Ideia
//Typescript: Criar um componente de slider para imagens que mude dinamicamente.

import React, { useState } from 'react';

interface SliderProps {
  imagens: string[];
}

const Slider: React.FC<SliderProps> = ({ imagens }) => {
  const [indice, setIndice] = useState(0);

  const avancarSlide = () => {
    setIndice((indice + 1) % imagens.length);
  };

  const retrocederSlide = () => {
    setIndice((indice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div>
      <button onClick={retrocederSlide}>Anterior</button>
      <img src={imagens[indice]} alt={`Imagem ${indice + 1}`} />
      <button onClick={avancarSlide}>Próximo</button>
    </div>
  );
};

export default Slider;

