//Ideia
//JavaScript: Implementar um algoritmo de ordenação (Bubble Sort) para ordenar um array de números.

function bubbleSort(array) {
  const tamanho = array.length;
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const trocaTemporaria = array[j];
        array[j] = array[j + 1];
        array[j + 1] = trocaTemporaria;
      }
    }
  }
  return array;
}

const numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", numeros);
bubbleSort(numeros);
console.log("Array ordenado:", numeros);
