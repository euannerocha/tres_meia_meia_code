// Dia 58 - TypeScript: Criar um programa que analise um texto e conte quantas palavras tem.

import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState<number | null>(null);

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    const count = words.length;
    setWordCount(count);
  };

  return (
    <div>
      <textarea
        placeholder="Digite seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={countWords}>Contar Palavras</button>
      {wordCount !== null && (
        <div>Seu texto tem {wordCount} palavra(s).</div>
      )}
    </div>
  );
};

export default WordCounter;
