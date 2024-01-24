//Ideia
//C#: fazer um programa que converta Celcius para Fahrenheit.

using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Conversor de Celsius para Fahrenheit");
        Console.Write("Digite a temperatura em Celsius: ");

        double celsius = Convert.ToDouble(Console.ReadLine());

        double fahrenheit = celsius * 9 / 5 + 32;

        Console.WriteLine($"{celsius} graus Celsius equivalem a {fahrenheit} graus Fahrenheit.");
    }
}
