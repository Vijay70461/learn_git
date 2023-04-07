import "./App.css";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import Product from "./component/Product";
import UseEffectApi from "./component/UseEffectApi";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Product />
      {/* <UseEffectApi /> */}
    </div>
  );
}

export default App;
