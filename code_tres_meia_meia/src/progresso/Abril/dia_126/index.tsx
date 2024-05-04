// Problema: Verificação de Números Primos em um Intervalo

// Dado um intervalo fechado de números de a a b, escreva uma função em TypeScript que retorne todos os números primos dentro desse intervalo.

// Objetivo:

// Retornar todos os números primos entre a e b.

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function primosNoIntervalo(a: number, b: number): number[] {
  const primos: number[] = [];
  for (let i = Math.max(2, a); i <= b; i++) {
    if (isPrime(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const a = 10;
const b = 30;
console.log(`Números primos entre ${a} e ${b}:`, primosNoIntervalo(a, b));
