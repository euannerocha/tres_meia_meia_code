// Problema: Encontrar o Caminho Mais Curto em um Grafo Ponderado e Direcionado

// Dado um grafo direcionado e ponderado, com vértices e arestas, escreva uma função em TypeScript que encontre o caminho mais curto de um vértice de origem para um vértice de destino.

// Descrição do Problema:

// Dado um grafo direcionado e ponderado, onde cada aresta tem um peso associado, encontre o caminho mais curto de um vértice de origem para um vértice de destino. O caminho mais curto é definido como o caminho com a menor soma dos pesos das arestas.

// Objetivo:

// Encontrar o caminho mais curto de um vértice de origem para um vértice de destino.

interface Aresta {
  origem: string;
  destino: string;
  peso: number;
}

function dijkstra(arestas: Aresta[], origem: string, destino: string): number {
  const grafos = new Map<string, Map<string, number>>();
  for (const { origem, destino, peso } of arestas) {
    if (!grafos.has(origem)) {
      grafos.set(origem, new Map<string, number>());
    }
    grafos.get(origem)?.set(destino, peso);
  }

  const distancia: Map<string, number> = new Map<string, number>();
  for (const vertice of grafos.keys()) {
    distancia.set(vertice, Infinity);
  }
  distancia.set(origem, 0);

  const visitados = new Set<string>();

  while (visitados.size !== grafos.size) {
    const verticeAtual = Array.from(distancia.entries())
      .filter(([v]) => !visitados.has(v))
      .reduce((a, b) => (a[1] < b[1] ? a : b))[0];
    visitados.add(verticeAtual);

    for (const [vizinho, peso] of grafos.get(verticeAtual) ||
      new Map<string, number>()) {
      const totalDistancia = distancia.get(verticeAtual)! + peso;
      if (totalDistancia < (distancia.get(vizinho) || Infinity)) {
        distancia.set(vizinho, totalDistancia);
      }
    }
  }

  return distancia.get(destino)!;
}

const arestas: Aresta[] = [
  { origem: "A", destino: "B", peso: 1 },
  { origem: "A", destino: "C", peso: 4 },
  { origem: "B", destino: "C", peso: 2 },
  { origem: "B", destino: "D", peso: 5 },
  { origem: "C", destino: "D", peso: 1 },
  { origem: "D", destino: "E", peso: 3 },
];
const origem = "A";
const destino = "E";
console.log("Distância mínima:", dijkstra(arestas, origem, destino));
