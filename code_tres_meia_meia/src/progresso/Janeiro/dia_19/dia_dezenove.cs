//Ideia
//C#: Criar um programa que leia um arquivo de texto e conte a quantidade de palavras.

using System;
using System.IO;

class Program
{
    static void Main()
    {
        string caminhoArquivo = "../assets/texto/index.txt";

        try
        {
            string conteudo = File.ReadAllText(caminhoArquivo);

            int quantidadePalavras = ContarPalavras(conteudo);

            Console.WriteLine($"O arquivo contém {quantidadePalavras} palavras.");
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine("O arquivo não foi encontrado.");
        }
        catch (IOException ex)
        {
            Console.WriteLine($"Ocorreu um erro ao ler o arquivo: {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Ocorreu um erro inesperado: {ex.Message}");
        }
    }

    static int ContarPalavras(string texto)
    {
        string[] palavras = texto.Split(new char[] { ' ', '\t', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);
        return palavras.Length;
    }
}
