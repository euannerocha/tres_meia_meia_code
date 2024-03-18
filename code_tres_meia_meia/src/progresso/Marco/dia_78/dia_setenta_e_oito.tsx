import React, { useState } from "react";
import "./button.css";

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    console.log("Botão de ação flutuante clicado!");
  };

  const handleScroll = () => {
    setIsVisible((prevState) => !prevState);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-action-button ${isVisible ? "visible" : "hidden"}`}
    >
      <button onClick={handleClick}>:)</button>
    </div>
  );
};

export default FloatingActionButton;
