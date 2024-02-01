import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComment = () =>
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("IL SERVER è STATO CONTATTATO CORRETTAMENTE", response);
          return response.json();
        } else {
          throw new Error("ERRORE NEL RECUPERO DEI DATI");
        }
      })
      .then((arrayData) => {
        console.log("DATI RICEVUTI", arrayData);
        this.setState({
          comments: arrayData,
        });
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
      });

  componentDidMount() {
    this.getComment();
  }

  render() {
    return (
      <div>
        <CommentList commentsToShow={this.state.comments}></CommentList>
        <AddComment asin={this.props.asin}></AddComment>
      </div>
    );
  }
}

export default CommentArea;
