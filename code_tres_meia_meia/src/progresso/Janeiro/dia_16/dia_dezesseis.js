//Ideia
//JavaScript: Implementar um algoritmo de busca binária em um array ordenado.

function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;
  
    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
  
      if (array[meio] === alvo) {
        return meio;
      } else if (array[meio] < alvo) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
    }
}
    return -1;
}
  
  const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const alvo = 7;
  
  const indiceEncontrado = buscaBinaria(arrayOrdenado, alvo);
  
  if (indiceEncontrado !== -1) {
    console.log(`O elemento ${alvo} foi encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`O elemento ${alvo} não foi encontrado no array.`);
  }
  