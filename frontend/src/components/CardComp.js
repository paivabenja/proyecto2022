import React from "react";
import { Card } from "react-bootstrap";
import "../styles/CardComp.css";

export default function CardComp({ cardTitle, cardImg, link }) {
  return (
    <a href={link} className="card">
      <Card className="card bg-dark text-white">
        <Card.Img src={cardImg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{cardTitle}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </a>
  );
}
