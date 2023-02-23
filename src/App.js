import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState([10, 3, 12]);
  const [time, setTime] = useState(state[0]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    var interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  if (time === 0 && turn === 0) {
    setTurn((prev) => prev + 1);
    setTime(state[1]);
  }

  if (time === 0 && turn === 1) {
    setTurn((prev) => prev + 1);
    setTime(state[2]);
  }

  if (time === 0 && turn === 2) {
    setTurn(0);
    setTime(state[0]);
  }

  return (
    <div className="App">
      <div className="time-bar">
        <span className="time">{time}</span>
      </div>
      <div className="bar">
        <div
          className={turn === 0 ? "light red red-active" : "light red"}
        ></div>
        <div
          className={turn === 1 ? "light yellow yellow-active" : "light yellow"}
        ></div>
        <div
          className={turn === 2 ? "light green green-active" : "light green"}
        ></div>
      </div>
      <div className="leg"></div>
    </div>
  );
}
