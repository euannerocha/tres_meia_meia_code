// Problema: Encontrar Todos os Caminhos em um Labirinto

// Dado um labirinto representado por uma matriz de células, onde '1' representa uma parede e '0' representa um espaço aberto, escreva uma função em TypeScript que encontre todos os possíveis caminhos de um ponto de entrada para um ponto de saída.

// Descrição do Problema:

// O labirinto é uma matriz m x n de zeros (caminhos possíveis) e uns (paredes).
// Você pode se mover para cima, para baixo, para a esquerda ou para a direita (não são permitidos movimentos diagonais).
// O ponto de entrada será sempre o canto superior esquerdo do labirinto (0,0).
// O ponto de saída será sempre o canto inferior direito do labirinto (m-1, n-1).
// Objetivo:

// Retornar todos os caminhos possíveis do ponto de entrada ao ponto de saída. Cada caminho deve ser uma lista de coordenadas.

function findPaths(
  maze: number[][],
  start: [number, number],
  end: [number, number]
): number[][][] {
  const paths: number[][][] = [];
  const path: number[][] = [];

  function explore(x: number, y: number) {
    if (
      x < 0 ||
      x >= maze.length ||
      y < 0 ||
      y >= maze[0].length ||
      maze[x][y] === 1
    ) {
      return;
    }

    path.push([x, y]);

    if (x === end[0] && y === end[1]) {
      paths.push([...path]);
    } else {
      maze[x][y] = 1;

      explore(x + 1, y);
      explore(x - 1, y);
      explore(x, y + 1);
      explore(x, y - 1);

      maze[x][y] = 0;
    }

    path.pop();
  }

  explore(start[0], start[1]);
  return paths;
}

const labirinto = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(findPaths(labirinto, [0, 0], [2, 2]));
