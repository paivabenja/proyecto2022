import React from "react";
import NavbarComp from "./NavbarComp";
import Item from "./Item";
import CardComp from "./CardComp";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavbarComp
        nombre="nombre"
        boton1="boton1"
        boton2="boton2"
        boton3="boton3"
        boton4="boton4"
        boton5="boton5"
        boton6="boton6"
      />
      <div className="body">
        <Item texto="texto" />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <Item texto="texto" />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
        <CardComp
          cardText="Descripcion"
          cardTitle="Titulo"
          cardSubTitle="Subtitulo"
          cardImg="https://placedog.net/300/250"
          cardButton="mirar en (plataforma)"
        />
      </div>
    </div>
  );
}

export default App;
