// Descrição:
// Escreva uma função em TypeScript que aceite um array de números e retorne a soma de todos os números pares dentro desse array.

// Exemplo:
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12 (porque 2 + 4 + 6 = 12)

function somaPares(numeros: number[]): number {
  let soma = 0;
  for (const num of numeros) {
    if (num % 2 === 0) {
      soma += num;
    }
  }
  return soma;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6];
console.log(somaPares(arrayNumeros));
