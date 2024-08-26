import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Zähler: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Zähler: {count}</h1>
      <button onClick={increment}>Erhöhen</button>
      <button onClick={decrement}>Verringern</button>
    </div>
  );
}

export default App;
