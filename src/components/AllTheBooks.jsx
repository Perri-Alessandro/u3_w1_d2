import React, { useState } from "react";
import BookCard from "../components/SingleBook";
import CommentArea from "./CommentArea";
import { Col, Row } from "react-bootstrap";

const CardBooks = ({ films, searchTerm }) => {
  // state = {
  //   selectedBookAsin: null,
  // };
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBookAsin((prevAsin) => (prevAsin === asin ? null : asin));
  };

  //   const { films, searchTerm } = this.props;
  //   const { selectedBookAsin } = this.state;

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
          changeSelectedBook={changeSelectedBook}
        />
      ))}

      <Col>
        <CommentArea asin={selectedBookAsin} />
      </Col>
    </Row>
  );
};

export default CardBooks;
