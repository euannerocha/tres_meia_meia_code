import React from "react";
import PieChart from "./dia_setenta_e_cinco";
const MyComponent: React.FC = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#2E8B57",
          "#800080",
          "#FFA500",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de Pizza</h2>
      <PieChart data={data} />
    </div>
  );
};

export default MyComponent;
