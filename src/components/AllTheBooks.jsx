import React, { Component } from "react";
import BookCard from "../components/SingleBook";
import CommentArea from "./CommentArea";
import { Col, Row } from "react-bootstrap";

class CardBooks extends Component {
  state = {
    selectedBookAsin: null,
  };

  changeSelectedBook = (asin) => {
    this.setState((prevState) => ({
      selectedBookAsin: prevState.selectedBookAsin === asin ? null : asin,
    }));
  };

  render() {
    const { films, searchTerm } = this.props;
    const { selectedBookAsin } = this.state;

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Row className="justify-content-evenly  g-4 m-1">
        {filteredFilms.slice(0, 8).map((film) => (
          <BookCard
            key={film.asin}
            film={film}
            selectedBook={selectedBookAsin}
            changeSelectedBook={this.changeSelectedBook}
          />
        ))}

        <Col md={2}>
          <CommentArea asin={selectedBookAsin} />
        </Col>
      </Row>
    );
  }
}

export default CardBooks;
