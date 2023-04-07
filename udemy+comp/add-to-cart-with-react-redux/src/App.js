import "./App.css";
import Main from "./component/Main";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cart from "./component/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          {/* <Route path="/cart" Component={Cart} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
