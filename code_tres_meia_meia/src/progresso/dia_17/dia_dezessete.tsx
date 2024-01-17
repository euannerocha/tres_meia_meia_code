//Ideia
//ypeScript: Criar um sistema de busca em um array de objetos com tipos específicos (vou usar livros)

type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
  };
  
  const books: Book[] = [
    { id: 1, title: 'O Herdeiro Guerreiro', author: 'Cinda Williams Chima', genre: 'Ficção' },
    { id: 2, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', genre: 'Fábula' },
    { id: 3, title: 'O Ladrão de Raios', author: 'Rick Riordan', genre: 'Fantasia' },
    { id: 4, title: 'Ruinínas de Gorlan', author: 'John Flanagan', genre: 'Ficção' },
  ];

  function searchBooksByTitle(books: Book[], searchTerm: string): Book[] {
    searchTerm = searchTerm.toLowerCase(); 
  
    return books.filter((book) => book.title.toLowerCase().includes(searchTerm));
  }
  
  const searchTerm = 'herdeiro';
  const results = searchBooksByTitle(books, searchTerm);
  
  console.log(`Livros com "${searchTerm}":`, results);
  