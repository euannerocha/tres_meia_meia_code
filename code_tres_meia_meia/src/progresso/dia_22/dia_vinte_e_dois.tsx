//Ideia
//React + Typescript: criar um componente de galeria de imagens com efeito de lightbox.

import React, { useState } from 'react';
import './dia_vinte_e_dois.css';

interface GaleriaProps {
  imagens: string[];
}

const Galeria: React.FC<GaleriaProps> = ({ imagens }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState<number | null>(null);

  const abrirLightbox = (index: number) => {
    setImagemSelecionada(index);
    setLightboxOpen(true);
  };

  const fecharLightbox = () => {
    setImagemSelecionada(null);
    setLightboxOpen(false);
  };

  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <div key={index} className="imagem-container" onClick={() => abrirLightbox(index)}>
          <img src={imagem} alt={`Imagem ${index + 1}`} />
        </div>
      ))}

      {lightboxOpen && (
        <div className="lightbox" onClick={fecharLightbox}>
          <div className="lightbox-conteudo">
            <span className="fechar" onClick={fecharLightbox}>
              &times;
            </span>
            <img src={imagens[imagemSelecionada as number]} alt={`Imagem ${imagemSelecionada! + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;

