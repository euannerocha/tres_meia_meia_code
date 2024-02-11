import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BotaoColorido } from "./progresso/Janeiro/dia_4/dia_quatro";
import Contador from "./progresso/Janeiro/dia_8/dia_oito";
import Cronometro from "./progresso/Janeiro/dia_11/dia_onze";
import BarraProgresso from "./progresso/Janeiro/dia_13/dia_treze";
import { CountdownTimer } from "./progresso/Janeiro/dia_15/dia_quinze";
import desventuras from "../src/assets/desventuras.svg";
import harryPotter from "../src/assets/harryPotter.svg";
import theWitcher from "../src/assets/theWitcher.svg";
import Slider from "./progresso/Janeiro/dia_18/dia_dezoito";
import GuessingGame from "./progresso/Janeiro/dia_21/dia_vinte_e_um";
import Galeria from "./progresso/Janeiro/dia_22/dia_vinte_e_dois";
import CalculadoraGorjeta from "./progresso/Janeiro/dia_23/dia_vinte_e_tres";
import Formulario from "./progresso/Janeiro/dia_24/dia_vinte_e_quatro";
import ForcaGame from "./progresso/Janeiro/dia_25/ForcaGame";
import TodoList from "./progresso/Janeiro/dia_26/dia_vinte_e_seis";
import ContadorButton from "./progresso/Janeiro/dia_27/dia_vinte_e_sete";
import FormularioComponent, {
  Form,
} from "./progresso/Janeiro/dia_28/dia_vinte_e_oito";
import Calculator from "./progresso/Janeiro/dia_29/dia_vinte_e_nove";
import CarrinhoDeCompras from "./progresso/Janeiro/dia_30/dia_trinta";
import Board from "./progresso/Fevereiro/dia_32/dia_trinta_e_dois";
import ThemeToggle from "./progresso/Fevereiro/dia_33/dia_trinta_e_tres";
import "./progresso/Fevereiro/dia_33/styles.css";
import ListaDeCompras from "./progresso/Fevereiro/dia_38/dia_trinta_e_oito";
import VideoGallery from "./progresso/Fevereiro/dia_41/dia_quarenta_e_um";
import AnoBissexto from "./progresso/Fevereiro/dia_42/dia_quarenta_e_dois";
// import BarChart from "./progresso/Fevereiro/dia_37/dia_trinta_e_sete";

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

  const handleCalcularGorjeta = (gorjeta: number, totalPagar: number) => {
    return `Gorjeta: ${gorjeta}, Total a Pagar: ${totalPagar}`;
  };

  const palavraSecreta = "TYPESCRIPT";

  const [contador, setContador] = useState<number>(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleFormSubmit = (form: Form) => {
    console.log("Formulário válido:", form);
  };

  const [result, setResult] = useState<number | null>(null);

  const handleResultChange = (newResult: number | null) => {
    setResult(newResult);
  };

  const itens = [
    { id: 1, nome: "Item 1", preco: 10.99 },
    { id: 2, nome: "Item 2", preco: 5.49 },
    { id: 3, nome: "Item 3", preco: 8.79 },
  ];

  const [isXNext, setIsXNext] = useState(true);

  const handleClickGame = () => {
    setIsXNext(!isXNext);
  };

  // const dataChart = [12, 19, 3, 5, 2, 3];
  // const labelsChart = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  return (
    <div id="root">
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
      <div>
        <GuessingGame />
      </div>
      <div>
        <Galeria imagens={imagens} />
      </div>
      <div>
        <CalculadoraGorjeta onCalcularGorjeta={handleCalcularGorjeta} />
      </div>
      <div>
        <Formulario />
      </div>
      <div>
        <ForcaGame palavraSecreta={palavraSecreta} />
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <ContadorButton onClick={handleClick} contador={contador} />
      </div>
      <div>
        <FormularioComponent onSubmit={handleFormSubmit} />
      </div>
      <div>
        <Calculator onResultChange={handleResultChange} />
        <div className="result">{result !== null ? `= ${result}` : null}</div>
      </div>
      <div>
        <CarrinhoDeCompras itens={itens} />
      </div>
      <div>
        <Board onClick={handleClickGame} />
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div>{/* <BarChart data={dataChart} labels={labelsChart} /> */}</div>
      <div>
        <ListaDeCompras />
      </div>
      <div>
        <VideoGallery />
      </div>
      <div>
        <AnoBissexto />
      </div>
    </div>
  );
}

export default App;
