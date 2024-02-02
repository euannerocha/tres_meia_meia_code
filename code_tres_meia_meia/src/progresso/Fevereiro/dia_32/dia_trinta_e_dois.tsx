import React, { useState } from 'react';
import Square from './dia_trinta_e_dois_pt_dois';

interface BoardProps {
  onClick: () => void;
}

const Board: React.FC<BoardProps> = ({ onClick }) => {
  const [squares] = useState<Array<string | null>>(Array(9).fill(null));

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick()} />;
  };

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
