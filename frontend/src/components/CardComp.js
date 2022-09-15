import React from "react";
<<<<<<< HEAD:frontend/src/components/CardComp.js
import { Card } from "react-bootstrap";
=======
import { Card, Button } from "react-bootstrap";
import '../styles/CardComp.css';
>>>>>>> 46e42e0061b06281679d2bb0a3a13a3f7a2b9c28:app-peliculas/src/components/CardComp.js

export default function CardComp({
  cardSubTitle,
  cardTitle,
  cardText,
  cardImg,
}) {
  return (
    <div className="card">
      <Card className="bg-dark text-white">
        <Card.Img src={cardImg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Card.Text>{cardSubTitle}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
