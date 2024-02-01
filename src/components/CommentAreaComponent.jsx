import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    selected: false,
    comment: "",
    rate: "", // Aggiunto uno stato per la valutazione
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { comment, rate } = this.state;

    // Assicurati di ottenere correttamente l'ID del libro dalla prop
    const bookId = this.props.bookId;

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      method: "POST", // Cambiato a "POST" per aggiungere un nuovo commento
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
      },
      body: JSON.stringify({
        comment: comment,
        rate: rate,
        elementId: bookId, // Includi l'ID del libro nell'oggetto JSON
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response, "IN COMUNICAZIONE CON IL SERVER");
          return response.json();
        } else {
          throw new Error("ERRORE DI ACCESSO IN COMUNICAZIONE CON SERVER");
        }
      })
      .then((data) => {
        console.log(data, "HO INVIATO I SEGUENTI DATI AL SERVER");
        // Aggiorna lo stato o esegui altre azioni necessarie dopo aver inviato il commento
      })
      .catch((error) => {
        console.error("ERRORE IN INVIO DATI A SERVER:", error);
      });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="row mt-3 align-items-center"
        >
          <i
            className="col-2 bi bi-plus-square bg-success rounded-3 text-white px-0"
            type="submit"
          ></i>

          <textarea
            name="comment"
            className="col-10 rounded-3"
            placeholder="Inserisci qui una recensione"
            value={this.state.comment}
            onChange={this.handleChange}
          />

          <label htmlFor="rate" className="col-2 text-white">
            Rate:
          </label>
          <input
            type="number"
            id="rate"
            name="rate"
            min="1"
            max="5"
            value={this.state.rate}
            onChange={this.handleChange}
          />
        </form>

        <CommentList bookId={this.props.bookId} />
      </div>
    );
  }
}

export default CommentArea;
