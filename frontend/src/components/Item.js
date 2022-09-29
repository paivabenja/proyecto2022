import React from "react";

export default function Item({ texto = "la concha de tu madre", children }) {
  return (
    <>
      <h1 style={{ padding: "10px" }}>{texto}</h1>
      {children}
    </>
  );
}
