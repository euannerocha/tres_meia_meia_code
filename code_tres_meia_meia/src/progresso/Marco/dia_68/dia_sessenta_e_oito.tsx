import React, { useState } from "react";

interface Props {
  nome: string;
}

const Saudacao: React.FC<Props> = ({ nome }) => {
  const [nomeDigitado, setNomeDigitado] = useState(nome);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeDigitado(event.target.value);
  };

  return (
    <div>
      <h1>Olá, {nomeDigitado}!</h1>
      <input
        type="text"
        value={nomeDigitado}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
    </div>
  );
};

export default Saudacao;
