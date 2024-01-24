//Ideia
//JavaScript: Criar uma função que determine se uma palavra é um palíndromo.

function palindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/[^a-z]/g, '');
  
    const palavraInvertida = palavra.split('').reverse().join('');
  
    return palavra === palavraInvertida;
  }
  
  console.log(palindromo("arara"));
  console.log(palindromo("reviver"));
  console.log(palindromo("casa"));
  console.log(palindromo("Ame a ema"));
  