import React, { useState } from 'react';

function MediaParOuImpar() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCalcularMedia = () => {
    const v1 = parseFloat(valor1);
    const v2 = parseFloat(valor2);
    const mediaCalculada = (v1 + v2) / 2;

    if (mediaCalculada % 2 === 0) {
      setMensagem('A média é par.');
    } else {
      setMensagem('A média é ímpar.');
    }
  };

  return (
    <div>
      <h1>Calculadora de Média Par ou Ímpar</h1>
      <label>
        Valor 1:
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Valor 2:
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCalcularMedia}>Calcular Média</button>
      <br />
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default MediaParOuImpar;
