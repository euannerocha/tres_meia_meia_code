// Problema: Encontrar o Menor Caminho em um Grafo Ponderado Não Direcionado

// Dado um grafo ponderado não direcionado, representado por uma lista de adjacências, e um vértice de origem, encontre o menor caminho até todos os outros vértices no grafo.

// Objetivo:

// Encontrar o menor caminho de um vértice de origem para todos os outros vértices no grafo.
// Descrição do Algoritmo de Dijkstra:

// Inicialize um conjunto de vértices visitados como vazio.
// Inicialize um array de distâncias, onde a distância para o vértice de origem é 0 e a distância para todos os outros vértices é infinito.
// Repita até que todos os vértices tenham sido visitados:
// Escolha o vértice não visitado com a menor distância atual.
// Marque o vértice como visitado.
// Atualize as distâncias dos vértices adjacentes ao vértice atual.
// Retorne o array de distâncias.

type Aresta = [number, number, number];

export function Dijkstra(grafo: Aresta[], origem: number): number[] {
  const distancias: number[] = new Array(grafo.length).fill(Infinity);
  const visitados: Set<number> = new Set();

  distancias[origem] = 0;

  while (visitados.size !== grafo.length) {
    let menorDistancia = Infinity;
    let verticeAtual = -1;

    for (let i = 0; i < grafo.length; i++) {
      if (!visitados.has(i) && distancias[i] < menorDistancia) {
        menorDistancia = distancias[i];
        verticeAtual = i;
      }
    }

    if (verticeAtual === -1) break;

    visitados.add(verticeAtual);

    for (const [origem, destino, peso] of grafo) {
      if (origem === verticeAtual && !visitados.has(destino)) {
        distancias[destino] = Math.min(
          distancias[destino],
          distancias[origem] + peso
        );
      } else if (destino === verticeAtual && !visitados.has(origem)) {
        distancias[origem] = Math.min(
          distancias[origem],
          distancias[destino] + peso
        );
      }
    }
  }

  return distancias;
}

const grafo: Aresta[] = [
  [0, 1, 4],
  [0, 2, 3],
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 5],
];
const origem = 0;
console.log(
  "Menor caminho a partir do vértice de origem:",
  Dijkstra(grafo, origem)
);
