// Problema: Encontrar Todos os Anagramas de uma Palavra em uma Lista de Palavras

// Dada uma palavra e uma lista de palavras, escreva uma função em TypeScript para encontrar todos os anagramas da palavra na lista de palavras.

// Objetivo:

// Encontrar todos os anagramas de uma palavra na lista de palavras.

function encontrarAnagramas(
  palavra: string,
  listaPalavras: string[]
): string[] {
  const saoAnagramas = (s1: string, s2: string): boolean => {
    const map = new Map<string, number>();
    for (const char of s1) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (const char of s2) {
      if (!map.has(char)) {
        return false;
      }
      map.set(char, map.get(char)! - 1);
    }
    return Array.from(map.values()).every((count) => count === 0);
  };

  const anagramas: string[] = [];
  for (const palavraLista of listaPalavras) {
    if (saoAnagramas(palavra, palavraLista)) {
      anagramas.push(palavraLista);
    }
  }
  return anagramas;
}

const palavra = "listen";
const listaPalavras = ["enlist", "google", "silent", "inlets", "listen"];
console.log(
  "Anagramas encontrados:",
  encontrarAnagramas(palavra, listaPalavras)
);
