import React, { Component } from "react";
import BookCard from "../components/SingleBook";
import CommentArea from "./CommentArea";

class CardBooks extends Component {
  state = {
    selectedBookAsin: null,
  };

  changeSelectedBook = (asin) => {
    this.setState({
      selectedBookAsin: asin,
    });
  };

  render() {
    const { films, searchTerm } = this.props;
    const { selectedBookAsin } = this.state;

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        {filteredFilms.slice(0, 8).map((film) => (
          <BookCard
            key={film.asin}
            film={film}
            selectedBook={selectedBookAsin}
            changeSelectedBook={this.changeSelectedBook}
          />
        ))}
        <CommentArea asin={selectedBookAsin} />
      </>
    );
  }
}

export default CardBooks;
