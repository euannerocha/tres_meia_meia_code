// Problema: Sequência de Fibonacci

// A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois números anteriores. A sequência começa com 0 e 1. Aqui estão os primeiros números da sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// Escreva uma função em TypeScript para encontrar o enésimo número na sequência de Fibonacci.

// Objetivo:

// Encontrar o enésimo número na sequência de Fibonacci.

function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  if (n <= 1) {
    return n;
  }

  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo.set(n, result);
  return result;
}

const n = 6;
console.log(`O ${n}º número na sequência de Fibonacci é: ${fibonacci(n)}`);
