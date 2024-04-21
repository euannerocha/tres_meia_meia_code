// "Calculadora de Frequência de Caracteres em uma String". Este problema envolve contar a frequência de cada caractere em uma string fornecida e retornar um objeto que mapeia cada caractere para sua contagem correspondente.

// Escreva uma função que recebe uma string e retorna um objeto com a frequência de cada caractere na string. Por exemplo, dada a string "hello", a função deve retornar { h: 1, e: 1, l: 2, o: 1 }.

// Requisitos:

// A função deve ignorar a diferença entre maiúsculas e minúsculas. Ou seja, 'H' e 'h' devem ser contados como o mesmo caractere.
// A função deve ignorar espaços e caracteres não alfabéticos.

function calcularFrequencia(s: string): Record<string, number> {
  const frequencia: Record<string, number> = {};
  for (const letra of s.toLowerCase()) {
    if (letra >= "a" && letra <= "z") {
      if (frequencia[letra]) {
        frequencia[letra]++;
      } else {
        frequencia[letra] = 1;
      }
    }
  }
  return frequencia;
}

console.log(calcularFrequencia("hello"));
console.log(calcularFrequencia("Hello, World!"));
console.log(calcularFrequencia("A man a plan a canal Panama"));
