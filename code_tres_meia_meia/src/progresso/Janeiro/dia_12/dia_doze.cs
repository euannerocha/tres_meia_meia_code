//Ideia
//C#: Construir um programa que converta um número decimal em binário.

using System;

class Program
{
    static void Main()
    {
        Console.Write("Digite um número decimal: ");
        int numeroDecimal = Convert.ToInt32(Console.ReadLine());

        string binario = DecimalParaBinario(numeroDecimal);

        Console.WriteLine($"O número binário correspondente é: {binario}");
    }

    static string DecimalParaBinario(int numeroDecimal)
    {
        if (numeroDecimal == 0)
        {
            return "0";
        }

        string resultado = "";

        while (numeroDecimal > 0)
        {
            int resto = numeroDecimal % 2;
            resultado = resto.ToString() + resultado;
            numeroDecimal /= 2;
        }

        return resultado;
    }
}
