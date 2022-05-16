import React from "react";
import NavbarComp from "./NavbarComp";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  return (
    // <Router>
    <div className="App">
      <NavbarComp
        nombre="nombre"
        boton1="boton1"
        boton2="boton2"
        boton3="boton3"
        boton4="boton4"
        boton5="boton5"
        boton6="boton6"
        boton7="boton7"
        boton8="boton8"
      />
      {/* <Switch> */}
      {/* <Route path="/"> */}
      <Home></Home>
      {/* </Route> */}
      {/* <Route path="/signup"> */}

      {/*signup */}
      {/* <SignUp></SignUp> */}

      {/* </Route> */}
      {/* </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
