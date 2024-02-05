//Ideia
//C#: Desenvolver um programa que leia um arquivo CSV e converta seus dados em objetos, supondo que o arquivo CSV contenha informações sobre pessoas com colunas como "Nome", "Idade" e "Cidade".

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Pessoa
{
    public string Nome { get; set; }
    public int Idade { get; set; }
    public string Cidade { get; set; }
}

class Program
{
    static void Main()
    {
        string caminhoArquivo = "aqui seria o caminho";

        List<Pessoa> pessoas = LerArquivoCSV(caminhoArquivo);

        foreach (var pessoa in pessoas)
        {
            Console.WriteLine($"Nome: {pessoa.Nome}, Idade: {pessoa.Idade}, Cidade: {pessoa.Cidade}");
        }
    }

    static List<Pessoa> LerArquivoCSV(string caminhoArquivo)
    {
        List<Pessoa> pessoas = new List<Pessoa>();

        try
        {
            string[] linhas = File.ReadAllLines(caminhoArquivo);

            for (int i = 1; i < linhas.Length; i++)
            {
                string[] colunas = linhas[i].Split(',');

                Pessoa pessoa = new Pessoa
                {
                    Nome = colunas[0],
                    Idade = int.Parse(colunas[1]),
                    Cidade = colunas[2]
                };

                pessoas.Add(pessoa);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erro ao ler o arquivo: {ex.Message}");
        }

        return pessoas;
    }
}
