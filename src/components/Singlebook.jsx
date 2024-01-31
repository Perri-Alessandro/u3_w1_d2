import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class BookCard extends Component {
  render() {
    const { film } = this.props;

    return (
      <Card
        key={film.asin}
        className="col-2 h-30 px-0 rounded-5"
        style={{ width: "15rem" }}
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
  }
}

export default BookCard;