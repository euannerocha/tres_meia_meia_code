import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RotaUm from "./progresso/Fevereiro/dia_44/dia_quarenta_e_quatro";
import Home from "./pages/Home";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/rota_um" Component={RotaUm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
