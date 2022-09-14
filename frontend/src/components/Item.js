import React from 'react';
import '../styles/Item.css';

export default function Item({ texto, children }) {
  return (
    <>
      <h1 className="item">{texto}</h1>
      {children}
    </>
  );
}
