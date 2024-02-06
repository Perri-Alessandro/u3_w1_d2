import React from "react";
import { Button, Card } from "react-bootstrap";

const BookCard = ({ film, selectedBook, changeSelectedBook }) => (
  <Card
    key={film.asin}
    className={`h-30 px-0 rounded-5 ${
      selectedBook === film.asin ? "border-danger border-3" : ""
    }`}
    style={{ width: "15rem" }}
    onClick={() => changeSelectedBook(film.asin)}
  >
    <Card.Img
      className="rounded-top-5"
      style={{ height: "25vh" }}
      variant="top"
      src={film.img}
      alt={film.title}
    />
    <Card.Body className="row flex-column justify-content-between mx-0">
      <Card.Title style={{ fontSize: "1em" }}>{film.title}</Card.Title>
      <Card.Text>
        {film.category} <br /> ${film.price}
      </Card.Text>
      <Button className="rounded-4 fs-4 border-primary" variant="warning">
        Buy it
      </Button>
    </Card.Body>
  </Card>
);

export default BookCard;
