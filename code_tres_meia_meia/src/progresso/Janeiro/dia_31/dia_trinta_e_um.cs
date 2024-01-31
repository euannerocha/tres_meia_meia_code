//Ideia
//Typescript + react: verificar se uma palavra é palíndromo ou n

using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Digite uma palavra ou frase para verificar se é um palíndromo:");
        string input = Console.ReadLine();

        if (IsPalindrome(input))
        {
            Console.WriteLine("É um palíndromo!");
        }
        else
        {
            Console.WriteLine("Não é um palíndromo.");
        }
    }

    static bool IsPalindrome(string input)
    {
        string cleanInput = input.Replace(" ", "").ToLower();

        char[] charArray = cleanInput.ToCharArray();
        Array.Reverse(charArray);
        string reversed = new string(charArray);

        return cleanInput == reversed;
    }
}