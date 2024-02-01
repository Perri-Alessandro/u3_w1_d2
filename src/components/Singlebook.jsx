import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentAreaComponent";

class BookCard extends Component {
  state = {
    selected: false,
  };

  handleToggleSelected = () => {
    const { film, onToggleSelected } = this.props;

    this.setState({
      selected: !this.state.selected,
    });

    onToggleSelected(film._id);
  };

  render() {
    const { film } = this.props;
    const { selected } = this.state;

    return (
      <Card
        key={film.asin}
        className={`col-2 h-30 px-0 rounded-5 ${
          selected ? "border-danger border-3" : ""
        }`}
        style={{ width: "15rem" }}
        onClick={this.handleToggleSelected}
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
          {selected && (
            <CommentArea
              bookId={film._id}
              addComment={this.props.addComment}
              onToggleSelected={this.props.onToggleSelected}
            />
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default BookCard;
