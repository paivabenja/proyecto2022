import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComp from "./NavbarComp";
import "../styles/NavbarComp.css";
import Item from "./Item";

function App() {
  return (
    <div>
      <NavbarComp />
      <Item />
    </div>
  );
}

export default App;
