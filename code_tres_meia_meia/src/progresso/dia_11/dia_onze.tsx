//Ideia
//React: Implementar um componente de cronômetro simples (apenas segundos)

import React, { useState, useEffect } from 'react';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const zerarCronometro = () => {
    setSegundos(0);
  };

  return (
    <div>
      <h1>Cronômetro</h1>
      <p>Tempo decorrido: {segundos} segundos</p>
      <button onClick={zerarCronometro}>Zerar</button>
    </div>
  );
};

export default Cronometro;
