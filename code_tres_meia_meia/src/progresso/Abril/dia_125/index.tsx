// Problema: Encontrar a Diferença entre a Soma dos Quadrados e o Quadrado da Soma dos Primeiros n Números Naturais

// Dado um número natural n, calcule a diferença entre a soma dos quadrados dos primeiros n números naturais e o quadrado da soma desses números.

// Fórmulas:

// Soma dos quadrados dos primeiros n números naturais
// Quadrado da soma dos primeiros n números naturais
 
// Objetivo:

// Calcular e retornar a diferença entre as duas somas para um dado n.

function diferencaSomaQuadrados(n: number): number {
    let somaQuadrados = 0;
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        somaQuadrados += i * i;
        soma += i;
    }

    const quadradoDaSoma = soma * soma;
    return quadradoDaSoma - somaQuadrados;
}

const numero = 10;
console.log(`A diferença para n = ${n} é:`, diferencaSomaQuadrados(numero)); 
