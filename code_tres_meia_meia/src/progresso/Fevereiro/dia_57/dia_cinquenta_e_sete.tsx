import React, { useState } from 'react';

const RegraDeTres: React.FC = () => {
  const [valor1, setValor1] = useState<number | ''>('');
  const [valor2, setValor2] = useState<number | ''>('');
  const [valor3, setValor3] = useState<number | ''>('');

  const handleChangeValor1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor1(e.target.value === '' ? '' : parseFloat(e.target.value));
  };

  const handleChangeValor2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor2(e.target.value === '' ? '' : parseFloat(e.target.value));
  };

  const handleChangeValor3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor3(e.target.value === '' ? '' : parseFloat(e.target.value));
  };

  const calcularValorFaltante = () => {
    if ((typeof valor1 !== 'number' && valor1 !== '') || (typeof valor2 !== 'number' && valor2 !== '') || (typeof valor3 !== 'number' && valor3 !== '')) {
      alert('Por favor, insira apenas números válidos.');
      return;
    }

    if (valor1 === 0 || valor2 === 0 || valor3 === 0) {
      alert('Nenhum dos valores pode ser zero.');
      return;
    }

    if (valor1 === '') {
      return (parseFloat(String(valor2)) * parseFloat(String(valor3))) / parseFloat(String(valor1));
    } else if (valor2 === '') {
      return (parseFloat(String(valor1)) * parseFloat(String(valor3))) / parseFloat(String(valor2));
    } else if (valor3 === '') {
      return (parseFloat(String(valor1)) * parseFloat(String(valor2))) / parseFloat(String(valor3));
    } else {
      return "Erro. Forneça valores válidos.";
    }
  };

  const resultado = calcularValorFaltante();

  return (
    <div>
      <h2>Calculadora de Regra de Três</h2>
      <div>
        <input
          type="number"
          value={valor1}
          onChange={handleChangeValor1}
          placeholder="Valor 1"
        />
        <span> é para </span>
        <input
          type="number"
          value={valor2}
          onChange={handleChangeValor2}
          placeholder="Valor 2"
        />
        <span> assim como </span>
        <input
          type="number"
          value={valor3}
          onChange={handleChangeValor3}
          placeholder="Valor 3"
        />
      </div>
      <button onClick={calcularValorFaltante}>Calcular</button>
      {resultado !== undefined ? <p>O resultado é: {resultado}</p> : <p>Forneça valores válidos</p>}
    </div>
  );
};

export default RegraDeTres;
