import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);

  // keeps tracks of mode history(array)
  const [history, setHistory] = useState([initial]);

  // when called, adds the new mode to our history, replace is used when transition is called twice
  function transition(mode, replace = false) {
    if (replace) {
      history.pop();
      history.push(mode);
      setHistory(history);
    } else {
      history.push(mode);
      setHistory(history);
    };

    setMode(history[history.length - 1]);
  };

  // When called, sets the mode to the previous item in our history array
  function back() {
    if (history.length < 2) return;
    history.pop();
    setHistory(history);
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
};
