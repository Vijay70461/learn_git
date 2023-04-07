// import "./App.css";
// import Mounting from "./lifecycle/mounting";
// import Perentcomponent from "./component/perentcomponent";
// import RegistrationFormSix from "./component/form/from-six";
// import Portaldemo from "./component/portal/portaldemo";

import Hero from "./component/errorboundary/Hero";
import Errorhandling from "./component/errorboundary/errorhandling";
import Getdata from "./component/httpcall/getdata";
import Getdataintable from "./component/httpcall/Getdataintable";
import Postdata from "./component/httpcall/postdata";
import C from "./component/context/c";

function App() {
  return (
    <div className="App">
      {/* <Mounting /> */}
      {/* <Perentcomponent /> */}
      {/* <RegistrationFormSix /> */}
      {/* <Portaldemo /> */}
      {/* <Errorhandling>
        <Hero heroname="Superman" />
      </Errorhandling>
      <Errorhandling>
        <Hero heroname="Chota Bhim" />
      </Errorhandling>
      <Errorhandling>
        <Hero heroname="Joker" />
      </Errorhandling> */}
      {/* <Getdata /> */}
      <Getdataintable />
      {/* <Postdata /> */}
      {/* <UserProvider value="Promise Academy">
        <C />
      </UserProvider> */}
    </div>
  );
}

export default App;
