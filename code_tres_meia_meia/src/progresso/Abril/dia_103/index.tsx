// Problema do Quebra-Cabeça das Cores:

// Você tem cinco casas em uma rua, cada uma de uma cor diferente. Cinco pessoas diferentes também moram nessas casas. Cada uma delas tem um animal de estimação diferente, uma bebida favorita diferente e uma profissão diferente. Aqui estão as pistas que você tem:

// O dono da casa vermelha bebe café.
// O dono da casa verde bebe chá.
// O dono da casa branca tem um pássaro como animal de estimação.
// O dono da casa amarela é um artista.
// O dono da casa no meio bebe leite.
// O dono da casa na primeira casa tem um cachorro.
// O dono da casa na última casa toma suco de laranja.
// O pintor vive ao lado do médico.
// O dono da casa que tem um gato é vizinho do que trabalha no cinema.
// O médico vive na casa verde.
// Agora, quem tem um peixe como animal de estimação?

//SOLUÇÃO

export interface Casa {
  cor: string;
  dono: string;
  animalEstimacao: string;
  bebida: string;
  profissao: string;
}

export function ResolverQuebraCabeca(): Casa[] | null {
  const cores = ["vermelha", "verde", "branca", "amarela", "azul"];
  const profissoes = ["médico", "artista", "pintor", "cineasta", "professor"];
  const bebidas = ["café", "chá", "leite", "suco de laranja", "água"];
  const animaisEstimacao = ["cachorro", "gato", "pássaro", "peixe", "coelho"];

  const casas: Casa[] = [];

  for (const cor of cores) {
    for (const profissao of profissoes) {
      for (const bebida of bebidas) {
        for (const animalEstimacao of animaisEstimacao) {
          if (
            (cor === "vermelha" && bebida === "café") ||
            (cor === "verde" && bebida === "chá") ||
            (cor === "branca" && animalEstimacao === "pássaro") ||
            (cor === "amarela" && profissao === "artista") ||
            bebida === "leite" ||
            (cor === "vermelha" && animalEstimacao === "cachorro") ||
            (cor === "azul" && bebida === "suco de laranja") ||
            (profissao === "pintor" &&
              (casas.length === 0 ||
                casas[casas.length - 1].profissao === "médico")) ||
            (profissao === "médico" &&
              (casas.length === 0 ||
                casas[casas.length - 1].profissao === "pintor")) ||
            (animalEstimacao === "gato" &&
              (cor === "verde" || cor === "azul") &&
              profissao === "cineasta") ||
            (profissao === "médico" && cor === "verde")
          ) {
            casas.push({
              cor: cor,
              dono: "",
              animalEstimacao: animalEstimacao,
              bebida: bebida,
              profissao: profissao,
            });
          }
        }
      }
    }
  }

  return casas;
}

console.log(ResolverQuebraCabeca());
