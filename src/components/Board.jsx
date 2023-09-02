import { useState } from "react";
import Square from "./Square.jsx";
import "/src/stylesheets/App.css";

export default function Board() {
  let [state, setState] = useState(new Array(9).fill(""));
  let [isXNext, setIsXNext] = useState(true);

  function handleState(pos) {
    setState((prevState) => {
      if (prevState[pos] || calculateWinner()) {
        return prevState;
      }

      prevState.splice(pos, 1, isXNext ? "X" : "O");

      return prevState;
    });

    setIsXNext(!isXNext);
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    if (state.every((elem) => elem !== "")) {
      return "No one";
    }
  }

  let winner = calculateWinner() ? `${calculateWinner()} wins` : ``;

  return (
    <>
      <p className="container__winner">{winner}</p>
      <div className="container__board">
        <Square value={state[0]} onClick={() => handleState(0)} />
        <Square value={state[1]} onClick={() => handleState(1)} />
        <Square value={state[2]} onClick={() => handleState(2)} />

        <Square value={state[3]} onClick={() => handleState(3)} />
        <Square value={state[4]} onClick={() => handleState(4)} />
        <Square value={state[5]} onClick={() => handleState(5)} />

        <Square value={state[6]} onClick={() => handleState(6)} />
        <Square value={state[7]} onClick={() => handleState(7)} />
        <Square value={state[8]} onClick={() => handleState(8)} />
      </div>
    </>
  );
}
