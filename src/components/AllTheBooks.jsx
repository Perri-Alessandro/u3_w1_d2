import React, { Component } from "react";
import BookCard from "../components/SingleBook";

class CardBooks extends Component {
  handleBookClick = (asin) => {
    console.log(`BOOK CON ASIN ${asin} CLICCATO`);
    this.setState({ selectedAsin: asin });
  };

  render() {
    const { films, searchTerm } = this.props;

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        {filteredFilms.slice(0, 8).map((film) => (
          <BookCard
            key={film.asin}
            film={film}
            onClick={() => this.handleBookClick(film.asin)}
          />
        ))}
      </>
    );
  }
}

export default CardBooks;
