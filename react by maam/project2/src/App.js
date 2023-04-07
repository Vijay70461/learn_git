import "./App.css";
import React from "react";
import ImageCarousal from "./Component/ImageCarousal";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ImageCarousal /> */}
      <Slider />
    </div>
  );
}

export default App;
