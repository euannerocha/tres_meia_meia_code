// Problema: Problema da Mochila (Knapsack Problem)

// Dado um conjunto de itens, cada um com um peso e um valor, determinar a quantidade de cada item a ser incluído em uma mochila de capacidade limitada de forma a maximizar o valor total na mochila.

// Descrição do Problema:

// Dado um conjunto de itens, onde cada item tem um peso e um valor associado, e uma mochila com capacidade limitada, o problema consiste em determinar a quantidade de cada item a ser incluído na mochila de forma a maximizar o valor total, sem exceder a capacidade máxima da mochila.

// Objetivo:

// Maximizar o valor total dos itens incluídos na mochila.

interface Item {
  peso: number;
  valor: number;
}

function mochila(capacidade: number, itens: Item[]): number {
  const n = itens.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(capacidade + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const { peso, valor } = itens[i - 1];
    for (let j = 1; j <= capacidade; j++) {
      if (peso > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - peso] + valor);
      }
    }
  }

  return dp[n][capacidade];
}

const testeItens: Item[] = [
  { peso: 2, valor: 10 },
  { peso: 3, valor: 15 },
  { peso: 5, valor: 20 },
];
const testeCapacidade = 7;
console.log("Valor máximo na mochila:", mochila(testeCapacidade, testeItens));
