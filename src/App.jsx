import Board from "./components/Board.jsx";
import "./stylesheets/App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="container__header">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}
