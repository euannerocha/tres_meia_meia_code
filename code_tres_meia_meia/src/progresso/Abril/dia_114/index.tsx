// Dado um array de números inteiros, encontre a soma máxima possível de uma subsequência tal que nenhum par de números escolhidos sejam vizinhos diretamente no array. Por exemplo, se o array é [3, 2, 7, 10], a soma máxima seria 13 (sumando 3 e 10).

// Restrições:

// Você não pode pegar dois números adjacentes.
// O array pode conter números negativos.
// Exemplo de Entrada e Saída:

// Entrada: [3, 2, 5, 10, 7]
// Saída: 15 (soma de 3, 5 e 7)
// Entrada: [-2, 1, 3, -4, 5]
// Saída: 8 (soma de 1 e 5)

function maxSumNonAdjacent(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let prev1 = 0;
  let prev2 = 0;

  for (const num of arr) {
    const current = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(maxSumNonAdjacent([3, 2, 5, 10, 7]));
console.log(maxSumNonAdjacent([-2, 1, 3, -4, 5]));
console.log(maxSumNonAdjacent([3, 2, 7, 10]));
console.log(maxSumNonAdjacent([5, 5, 10, 100, 10, 5]));
