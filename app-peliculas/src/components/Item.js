import React from "react";
import "../styles/Item.css";

export default function Item({ texto }) {
  console.log(texto);
  return (
    <div>
      <h1 className="item">{texto}</h1>
    </div>
  );
}
