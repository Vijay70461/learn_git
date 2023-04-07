import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("Red");
  const [i, seti] = useState(0);

  useEffect(() => {
    setColor((color) => "Green");

    setTimeout(() => {
      seti((i) => i + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <h1>{i}</h1>
      My favorite color is {color}!
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <br></br>
      <button type="button" onClick={() => seti(i + 1)}>
        Blue
      </button>
    </div>
  );
}

export default App;
