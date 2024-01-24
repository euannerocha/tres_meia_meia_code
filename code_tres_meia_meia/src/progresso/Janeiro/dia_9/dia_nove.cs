//Ideia
//C#: Escrever um programa que determine se um número é primo ou não.

using System;

class Program
{
    static void Main()
    {
        Console.Write("Digite um número inteiro positivo maior que 1: ");
        int numero = Convert.ToInt32(Console.ReadLine());

        bool ehPrimo = VerificarPrimo(numero);

        if (ehPrimo)
        {
            Console.WriteLine($"{numero} é um número primo.");
        }
        else
        {
            Console.WriteLine($"{numero} não é um número primo.");
        }
    }

    static bool VerificarPrimo(int numero)
    {
        if (numero <= 1)
        {
            return false;
        }

        for (int i = 2; i <= Math.Sqrt(numero); i++)
        {
            if (numero % i == 0)
            {
                return false;
            }
        }

        return true;
    }
}
