// Validar uma sequência de parênteses

// Dada uma string contendo apenas os caracteres '(' e ')', crie uma função em TypeScript para determinar se a string de entrada é uma sequência válida de parênteses.

// Exemplos:
// Entrada: "()"

// Saída: true

// Entrada: "())"

// Saída: false

// Entrada: "(()())()"

// Saída: true

// Entrada: "(()"

// Saída: false

function isValidParentheses(s: string): boolean {
  const stack: string[] = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("())"));
console.log(isValidParentheses("(()())()"));
console.log(isValidParentheses("(()"));
