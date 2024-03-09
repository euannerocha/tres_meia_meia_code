import React, { useState } from "react";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  message,
  onConfirm,
}: ConfirmDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const dialogStyles: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    color: "black",
  };

  return (
    <div>
      <button onClick={openDialog}>Abrir Caixa de Diálogo</button>
      {isOpen && (
        <div style={dialogStyles}>
          <p>{message}</p>
          <button onClick={handleConfirm}>Confirmar</button>
          <button onClick={closeDialog}>Cancelar</button>
        </div>
      )}
    </div>
  );
}
