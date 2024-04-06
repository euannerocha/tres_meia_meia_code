import React from "react";
// import { TesteButtons } from "../../Marco/dia_86";
import { ButtonGoToHome } from "../../Marco/dia_88";
import { MinhaAltura } from "../../Marco/dia_89";
import Playlist from "../../Abril/dia_97";
import Termometro from "../../Abril/dia_98";

const RotaUm: React.FC = () => {
  const songs = [
    {
      id: 1,
      title: "RAYE",
      artist: "Escapism",
      url: "https://youtu.be/Dll6VJ2C7wo?si=SnIPL31XYH5TvlDr",
    },
    {
      id: 2,
      title: "Beautful thins",
      artist: "Benson Boone",
      url: "https://youtu.be/Oa_RSwwpPaA?si=cOCA4Z1i_xvZqO7T",
    },
    {
      id: 3,
      title: "Thunderstruck",
      artist: "AC/DC",
      url: "https://youtu.be/v2AC41dglnM?si=m0kPN_XNaG2RVITy",
    },
  ];

  return (
    <div>
      <ButtonGoToHome />
      <h2>ROTA UM</h2>
      <p>SEJA BEM-VINDO À ROTA UM!</p>
      {/* <TesteButtons /> */}
      <MinhaAltura />

      <div>
        <h1>My Music Player</h1>
        <Playlist songs={songs} />
      </div>
      <Termometro temperatura={35} />
    </div>
  );
};

export default RotaUm;
