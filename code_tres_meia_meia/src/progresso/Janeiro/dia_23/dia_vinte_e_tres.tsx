//Ideia
//React + Typescript: criar uma calculadora de gorjeta!

import React, { useState } from 'react';

interface CalculadoraGorjetaProps {
  onCalcularGorjeta: (gorjeta: number, totalPagar: number) => void;
}

const CalculadoraGorjeta: React.FC<CalculadoraGorjetaProps> = ({ onCalcularGorjeta }) => {
  const [valorConta, setValorConta] = useState<number>(0);
  const [porcentagemGorjeta, setPorcentagemGorjeta] = useState<number>(5);
  const [totalPagar, setTotalPagar] = useState<number>(0);

  const calcularGorjeta = () => {
    const gorjeta = (valorConta * porcentagemGorjeta) / 100;
    const total = valorConta + gorjeta;

    setTotalPagar(total);
    onCalcularGorjeta(gorjeta, total);
  };

  return (
    <div>
      <label htmlFor="valorConta">Valor da Conta:</label>
      <input
        type="number"
        id="valorConta"
        placeholder="Insira o valor da conta"
        value={valorConta}
        onChange={(e) => setValorConta(parseFloat(e.target.value))}
      />

      <br />

      <label htmlFor="porcentagemGorjeta">Porcentagem de Gorjeta:</label>
      <input
        type="number"
        id="porcentagemGorjeta"
        placeholder="Insira a porcentagem de gorjeta"
        value={porcentagemGorjeta}
        onChange={(e) => setPorcentagemGorjeta(parseFloat(e.target.value))}
      />

      <br />

      <button onClick={calcularGorjeta}>Calcular Gorjeta</button>

      <p>Valor total a pagar: ${totalPagar.toFixed(2)}</p>
    </div>
  );
};

export default CalculadoraGorjeta;


