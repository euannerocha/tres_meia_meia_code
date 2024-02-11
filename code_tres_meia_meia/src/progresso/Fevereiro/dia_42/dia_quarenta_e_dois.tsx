import React, { useState } from 'react';

const AnoBissexto: React.FC = () => {
  const [ano, setAno] = useState<number>();
  const [mensagem, setMensagem] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputAno = parseInt(event.target.value);
    if (!isNaN(inputAno) && event.target.value.length <= 4) {
      setAno(inputAno);
    } else {
      setAno(undefined);
      setMensagem('');
    }
  };

  const verificarBissexto = () => {
    if (ano) {
      if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        setMensagem(`O ano ${ano} é bissexto.`);
      } else {
        setMensagem(`O ano ${ano} não é bissexto.`);
      }
    } else {
      setMensagem('Por favor, insira um ano válido.');
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite um ano (4 dígitos)"
        value={ano}
        onChange={handleInputChange}
      />
      <button onClick={verificarBissexto}>Verificar</button>
      <p>{mensagem}</p>
    </div>
  );
};

export default AnoBissexto;
