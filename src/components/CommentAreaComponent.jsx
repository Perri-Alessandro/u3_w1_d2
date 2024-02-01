import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      comment: "",
      rate: "",
      comments: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { comment, rate } = this.state;
    const { bookId } = this.props;

    if (!comment || !rate) {
      alert("Inserisci sia il commento che il rate prima di inviare.");
      return;
    }

    this.addComment({
      comment: comment,
      rate: rate,
      elementId: bookId,
    });

    // Pulisci lo stato dopo l'invio del commento
    this.setState({
      comment: "",
      rate: "",
    });
  };

  addComment = (commentData) => {
    const { bookId } = this.props;

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
      },
      body: JSON.stringify(commentData),
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
        this.setState({
          comments: data.comments,
        });
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
            onClick={(e) => e.stopPropagation()} // Impedisci la propagazione dell'evento onClick
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
            onClick={(e) => e.stopPropagation()} // Impedisci la propagazione dell'evento onClick
          />
        </form>

        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
