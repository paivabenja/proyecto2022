import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/CardComp.css';

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
