import React from "react";
import { TesteButtons } from "../../Marco/dia_86";
import { ButtonGoToHome } from "../../Marco/dia_88";

const RotaUm: React.FC = () => {
  return (
    <div>
      <ButtonGoToHome />
      <h2>ROTA UM</h2>
      <p>SEJA BEM-VINDO À ROTA UM!</p>
      <TesteButtons />
    </div>
  );
};

export default RotaUm;
