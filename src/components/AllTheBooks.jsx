import React, { Component } from "react";
import BookCard from "../components/SingleBook";

class CardBooks extends Component {
  state = {
    selectedBookId: null,
  };

  handleToggleSelected = (bookId) => {
    this.setState({
      selectedBookId: bookId,
    });
  };

  addComment = (commentData) => {
    // Implementa la logica necessaria per aggiungere il commento, se necessario
    console.log("Aggiungi commento:", commentData);
  };

  render() {
    const { films, searchTerm } = this.props;

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="container">
        <div className="row justify-content-evenly justify-content-sm-between g-4 mx-1">
          {filteredFilms.map((film) => (
            <BookCard
              key={film.asin}
              film={film}
              onToggleSelected={this.handleToggleSelected}
              addComment={this.addComment}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardBooks;
