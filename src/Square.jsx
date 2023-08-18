export default function Square({ value, onClick }) {
  return (
    <div className="container__board__square" onClick={onClick}>
      {value}
    </div>
  );
}
