import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      history.pop();
      history.push(mode);
      setHistory(history);
    } else {
      history.push(mode);
      console.log("trans mode=>", mode, "history=>", history)
      setHistory(history);
    };
    setMode(history[history.length - 1]);
  };

  function back() {
    if (history.length < 2) return;
    history.pop();
    setHistory(history);
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
}
