import { useState } from "react";

export function MinhaAltura() {
  const [altura, setAltura] = useState<number>(150);

  const handleAlturaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAltura(Number(event.target.value));
  };

  return (
    <>
      <h1>Selecione sua altura:</h1>
      <input
        type="range"
        min={0}
        max={250}
        value={altura}
        step={1}
        onInput={handleAlturaChange}
      />
      <p>Você tem {altura} centímetros de altura.</p>
    </>
  );
}
