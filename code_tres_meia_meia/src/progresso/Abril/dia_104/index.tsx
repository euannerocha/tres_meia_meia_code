// Problema: O Torneio de Xadrez

// Em um torneio de xadrez, 8 jogadores participam de uma série de partidas. Cada jogador joga exatamente uma vez contra cada um dos outros jogadores. Após todas as partidas, cada jogador recebe uma pontuação de acordo com o resultado de suas partidas: 1 ponto para cada vitória, 0.5 pontos para cada empate e 0 pontos para cada derrota.

// Dadas as seguintes informações:

// Ana ganhou 2 partidas e empatou 1.
// Bruno ganhou 1 partida e empatou 2.
// Carlos ganhou 3 partidas.
// Daniel ganhou 1 partida e empatou 1.
// Eduardo empatou todas as suas partidas.
// Fabiana empatou 2 partidas e perdeu 1.
// Gabriela ganhou 2 partidas e perdeu 1.
// Helena perdeu 2 partidas e empatou 1.
// Determine o total de pontos de cada jogador e classifique-os em ordem decrescente de pontuação.

interface Jogador {
  nome: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  pontos: number;
}

const jogadores: Jogador[] = [
  { nome: "Ana", vitorias: 2, empates: 1, derrotas: 0, pontos: 0 },
  { nome: "Bruno", vitorias: 1, empates: 2, derrotas: 0, pontos: 0 },
  { nome: "Carlos", vitorias: 3, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Daniel", vitorias: 1, empates: 1, derrotas: 0, pontos: 0 },
  { nome: "Eduardo", vitorias: 0, empates: 3, derrotas: 0, pontos: 0 },
  { nome: "Fabiana", vitorias: 0, empates: 2, derrotas: 1, pontos: 0 },
  { nome: "Gabriela", vitorias: 2, empates: 0, derrotas: 1, pontos: 0 },
  { nome: "Helena", vitorias: 0, empates: 1, derrotas: 2, pontos: 0 },
];

jogadores.forEach((jogador) => {
  jogador.pontos = jogador.vitorias * 1 + jogador.empates * 0.5;
});

jogadores.sort((a, b) => b.pontos - a.pontos);

console.log("Classificação final:");
jogadores.forEach((jogador, indice) => {
  console.log(`${indice + 1}. ${jogador.nome}: ${jogador.pontos} pontos`);
});
