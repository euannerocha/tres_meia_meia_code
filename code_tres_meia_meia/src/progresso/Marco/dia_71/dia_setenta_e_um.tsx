import React, { useState } from "react";

const CharacterCounter: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClean = () => {
    setText("");
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Digite aqui..."
        rows={4}
        cols={50}
      />
      <button onClick={handleClean}>Limpar</button>
      <div>Contagem de caracteres: {text.length}</div>
    </div>
  );
};

export default CharacterCounter;
