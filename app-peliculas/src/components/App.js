import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComp from "./NavbarComp";
import "../styles/NavbarComp.css";
import "../styles/App.css";
import Item from "./Item";
import CardComp from "./CardComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="body">
        <Item texto="favoritos" />
        <CardComp
          cardText="lrfjdslkjflsdka"
          cardTitle="lo vengadore"
          cardSubTitle="alla la vengan gordo gil"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="lrfjdslkjflsdka"
          cardTitle="lo vengadore"
          cardSubTitle="alla la vengan gordo gil"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
      </div>
    </div>
  );
}

export default App;
