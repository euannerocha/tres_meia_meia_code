//Ideia
//TypeScript: criar uma interface simples e imprimir valores usando tipos de dados.

interface IPessoa {
  nome: string;
  idade: number;
  email: string;
}

const pessoa: IPessoa = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
};

console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Email:", pessoa.email);

interface ICard {
  titulo: string;
  conteudo: string;
  id: number;
  isActive: boolean;
}

const card: ICard = {
  titulo: "Card de Teste",
  conteudo: "Esse card serve para testarmos o console.",
  id: 1,
  isActive: true,
};

card.isActive
  ? console.log(
      `O Id do card é ${card.id}, e ele fala sobre ${card.conteudo} e está disponível pra leitura!`
    )
  : console.log(
      `O Id do card é ${card.id}, e ele fala sobre ${card.conteudo} e NÃO está disponível pra leitura!`
    );
