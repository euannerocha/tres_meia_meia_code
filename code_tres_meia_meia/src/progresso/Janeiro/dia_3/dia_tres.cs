//Ideia
//C#: programa que calcule a média de um array de números.

using System;
using System.Linq;

class Program
{
    static void Main()
    {
        double[] numeros = { 2.5, 3.8, 9.2, 5.1, 7.6 };

        double media = CalcularMedia(numeros);
        Console.WriteLine($"A média dos números é: {media}");
    }


    static double CalcularMedia(double[] numeros)
    {
        if (numeros.Length == 0)
        {
            throw new InvalidOperationException("A lista está vazia. Não é possível calcular a média.");
        }

        double media = numeros.Average();
        return media;
    }
}