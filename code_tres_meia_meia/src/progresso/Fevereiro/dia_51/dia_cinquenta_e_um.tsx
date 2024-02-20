import React, { useState } from "react";

const OrdenarNumeros: React.FC = () => {
  const [sequencia, setSequencia] = useState<string>("");
  const [numerosOrdenados, setNumerosOrdenados] = useState<number[]>([]);

  const ordenarNumeros = (sequencia: string) => {
    const numeros = sequencia.replace(/\s/g, "").split(",");

    const numerosInteiros = numeros.map((num) => parseInt(num, 10));

    const numerosOrdenados = numerosInteiros.sort((a, b) => a - b);

    return numerosOrdenados;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSequencia(event.target.value);
  };

  const handleOrdenarClick = () => {
    const numerosOrdenados = ordenarNumeros(sequencia);
    setNumerosOrdenados(numerosOrdenados);
  };

  return (
    <div>
      <h2>Ordenar Números</h2>
      <p>Digite a sequência numérica separada por vírgulas (sem espaços)</p>
      <input
        type="text"
        value={sequencia}
        onChange={handleInputChange}
        placeholder="Digite a sequência numérica separada por vírgulas (sem espaços)"
      />
      <button onClick={handleOrdenarClick}>Ordenar</button>
      <div>
        {numerosOrdenados.length > 0 && (
          <p>Números em ordem crescente: {numerosOrdenados.join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default OrdenarNumeros;
