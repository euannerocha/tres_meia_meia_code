import React, { useState } from "react";
import "./index.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (prev: boolean) => {
    setIsOpen(!prev);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => toggleDropdown(isOpen)}
        className="dropdown-toggle"
      >
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Oi, eu sou uma opção!</li>
          <li>É, e eu sou outra!</li>
          <li>E eu sou a última!</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
