import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlerClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X"; // ['X', null, null, null]
    setSquares(nextSquares);
  }

  return (
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => handlerClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handlerClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handlerClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handlerClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handlerClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handlerClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handlerClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handlerClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handlerClick(8)} />
    </div>
  );
}
