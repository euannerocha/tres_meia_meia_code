import React from "react";
import "./Termometro.css";

interface TermometroProps {
  temperatura: number;
}

const Termometro: React.FC<TermometroProps> = ({ temperatura }) => {
  const minTemp = -20;
  const maxTemp = 40;
  const alturaTotal = 200;

  const alturaTemperatura =
    ((temperatura - minTemp) / (maxTemp - minTemp)) * alturaTotal;

  return (
    <div className="termometro">
      <div
        className="temperatura"
        style={{ height: `${alturaTemperatura}px` }}
      />
      <div className="temperatura-atual">{temperatura}°C</div>
    </div>
  );
};

export default Termometro;
