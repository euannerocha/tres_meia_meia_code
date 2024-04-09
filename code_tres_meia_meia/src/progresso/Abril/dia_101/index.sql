CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(15)
);


-- Guia passo a passo para começar um projeto SQL:

-- 1. **Defina os Requisitos do Projeto:**
--    - Identifique as necessidades do seu projeto. Quais dados você precisa armazenar e manipular? Quais funcionalidades seu banco de dados deve oferecer?

-- 2. **Escolha um Sistema de Gerenciamento de Banco de Dados (SGBD):**
--    - Existem várias opções disponíveis, como MySQL, PostgreSQL, SQL Server, Oracle, SQLite, etc. Escolha o que melhor se adequa aos requisitos do seu projeto e às suas preferências.

-- 3. **Projete o Esquema do Banco de Dados:**
--    - Crie um diagrama ER (Entidade-Relacionamento) para representar as entidades, seus atributos e os relacionamentos entre elas.
--    - Considere a normalização do banco de dados para evitar redundância e inconsistência nos dados.

-- 4. **Crie o Banco de Dados:**
--    - Use o SGBD escolhido para criar o banco de dados com base no esquema projetado.

-- 5. **Desenvolva as Tabelas e Relacionamentos:**
--    - Escreva o código SQL para criar as tabelas conforme definido no diagrama ER.
--    - Estabeleça as chaves primárias e estrangeiras para garantir a integridade referencial.

-- 6. **Popule o Banco de Dados com Dados de Exemplo:**
--    - Insira alguns dados de exemplo para testar a estrutura do banco de dados e garantir que tudo esteja funcionando conforme o esperado.

-- 7. **Desenvolva as Consultas:**
--    - Escreva consultas SQL para recuperar, inserir, atualizar e excluir dados do banco de dados.
--    - Teste as consultas para garantir que elas estejam retornando os resultados esperados.

-- 8. **Implemente a Lógica de Negócios (se necessário):**
--    - Se o seu projeto envolver lógica de negócios complexa, você pode implementá-la no banco de dados usando procedimentos armazenados, funções, gatilhos, etc.

-- 9. **Otimize o Desempenho (Opcional):**
--    - Identifique consultas lentas ou gargalos de desempenho e otimize o banco de dados, se necessário, adicionando índices, ajustando as consultas, etc.

-- 10. **Faça Backup e Manutenção:**
--     - Regularmente, faça backup do seu banco de dados para evitar a perda de dados. Além disso, realize a manutenção necessária para garantir o bom funcionamento do sistema.

-- 11. **Documente o Projeto:**
--     - Documente o esquema do banco de dados, consultas importantes, lógica de negócios e quaisquer outras informações relevantes para facilitar a manutenção e o entendimento do sistema.