//Ideia
//JavaScript: Implementar um algoritmo recursivo para calcular o fatorial de um número.

function calcularFatorial(numero) {
    if (numero === 0) {
      return 1;
    }
    
    return numero * calcularFatorial(numero - 1);
  }
  
  const numeroParaCalcularFatorial = 5;
  const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
  
  console.log(`O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial}`);
  