import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BotaoColorido } from "./progresso/dia_4/dia_quatro";
import Contador from "./progresso/dia_8/dia_oito";
import Cronometro from "./progresso/dia_11/dia_onze";
import BarraProgresso from "./progresso/dia_13/dia_treze";
import { CountdownTimer } from "./progresso/dia_15/dia_quinze";
import desventuras from "../src/assets/desventuras.svg";
import harryPotter from "../src/assets/harryPotter.svg";
import theWitcher from "../src/assets/theWitcher.svg";
import Slider from "./progresso/dia_18/dia_dezoito";

function App() {
  const [count, setCount] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const targetDate = "2024-01-29T00:00:00";

  const imagens = [desventuras, theWitcher, harryPotter];

  const aumentarProgresso = () => {
    if (progresso < 100) {
      setProgresso(progresso + 10);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <BotaoColorido />
      <Contador />
      <Cronometro />
      <div>
        <button onClick={aumentarProgresso}>Aumentar Progresso</button>
        <BarraProgresso valor={progresso} />
      </div>
      <div>
        <h1>Contagem Regressiva</h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div>
        <h1>S.L.I.D.E.R.</h1>
        <Slider imagens={imagens} />
      </div>
    </>
  );
}

export default App;
