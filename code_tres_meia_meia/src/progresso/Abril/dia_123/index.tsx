// Problema: Subconjunto com a Maior Soma

// Dado um array de números inteiros, encontre o subconjunto contíguo (ou seja, os elementos devem estar juntos no array) com a maior soma possível.

// Objetivo:

// Encontrar o subconjunto contíguo com a maior soma dentro do array.

export function MaiorSomaSubconjunto(nums: number[]): number {
  let maxSomaAtual = nums[0];
  let maxSomaTotal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSomaAtual = Math.max(nums[i], maxSomaAtual + nums[i]);
    maxSomaTotal = Math.max(maxSomaTotal, maxSomaAtual);
  }

  return maxSomaTotal;
}

const nums = [1, -3, 4, -2, -1, 6];
console.log("Maior soma do subconjunto:", MaiorSomaSubconjunto(nums));
