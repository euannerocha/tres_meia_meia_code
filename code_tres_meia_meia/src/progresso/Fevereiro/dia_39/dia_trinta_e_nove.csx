//Ideia
//C#: desenvolver um programa que conte a quantidade de vogais em uma frase

using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Digite uma frase:");
        string frase = Console.ReadLine().ToLower();

        int contadorVogais = ContarVogais(frase);

        Console.WriteLine($"A frase possui {contadorVogais} vogais.");
    }

    static int ContarVogais(string frase)
    {
        int contador = 0;
        foreach (char c in frase)
        {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            {
                contador++;
            }
        }
        return contador;
    }
}

