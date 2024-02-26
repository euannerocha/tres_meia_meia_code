//calculadora de equações de 3º grau

import React, { useState } from 'react';

const TerceiroGrauCalculator: React.FC = () => {
  const [valorA, setValorA] = useState<number>(0);
  const [valorB, setValorB] = useState<number>(0);
  const [valorC, setValorC] = useState<number>(0);
  const [resultadoX1, setResultadoX1] = useState<number | null>(null);
  const [resultadoX2, setResultadoX2] = useState<number | null>(null);

  const calcularResultado = () => {
    if (valorA === 0 || valorB === 0 || valorC === 0) {
      alert('Por favor, insira todos os valores.');
      return;
    }

    const discriminante = Math.pow(valorB, 2) - 4 * valorA * valorC;
    if (discriminante < 0) {
      alert('A equação não tem raízes reais.');
      return;
    }

    const x1 = (-valorB + Math.sqrt(discriminante)) / (2 * valorA);
    const x2 = (-valorB - Math.sqrt(discriminante)) / (2 * valorA);

    setResultadoX1(x1);
    setResultadoX2(x2);
  };

  return (
    <div>
      <h2>Calculadora de Bhaskara</h2>
      <div>
        <label>
          Valor de A:
          <input type="number" value={valorA} onChange={(e) => setValorA(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Valor de B:
          <input type="number" value={valorB} onChange={(e) => setValorB(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Valor de C:
          <input type="number" value={valorC} onChange={(e) => setValorC(parseFloat(e.target.value))} />
        </label>
      </div>
      <button onClick={calcularResultado}>Calcular</button>
      {resultadoX1 !== null && resultadoX2 !== null && (
        <div>
          <h3>Resultado (X1): {resultadoX1}</h3>
          <h3>Resultado (X2): {resultadoX2}</h3>
        </div>
      )}
    </div>
  );
};

export default TerceiroGrauCalculator;
