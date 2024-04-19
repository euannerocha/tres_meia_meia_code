// Você precisa escrever uma função que verifica se uma senha atende aos seguintes critérios de segurança:

// Deve ter pelo menos 8 caracteres.
// Deve conter pelo menos um número.
// Deve conter pelo menos uma letra maiúscula.
// Deve conter pelo menos uma letra minúscula.
// Não deve conter espaços em branco.
// A função deve retornar true se a senha atender a todos os critérios, ou false caso contrário.

export function validarSenha(senha: string): boolean {
  const temOitoCaracteres: boolean = senha.length >= 8;
  const temNumero: boolean = /\d/.test(senha);
  const temMaiuscula: boolean = /[A-Z]/.test(senha);
  const temMinuscula: boolean = /[a-z]/.test(senha);
  const semEspacos: boolean = !/\s/.test(senha);

  return (
    temOitoCaracteres && temNumero && temMaiuscula && temMinuscula && semEspacos
  );
}

//meus testes:

console.log(validarSenha("Senha123"));
console.log(validarSenha("senha123"));
console.log(validarSenha("Senha123!"));
console.log(validarSenha("12345678"));
console.log(validarSenha("S3nha Val1da"));
