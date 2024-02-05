import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComment = () => {
    const { asin } = this.props;
    if (asin) {
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("ERRORE NEL RECUPERO DEI DATI");
          }
        })
        .then((arrayData) => {
          this.setState({
            comments: arrayData,
          });
        })
        .catch((err) => {
          console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        });
    }
  };

  componentDidMount() {
    this.getComment();
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.getComment();
    }
  }

  render() {
    const { asin } = this.props;
    const { comments } = this.state;

    return (
      <div>
        {asin ? (
          <>
            <CommentList commentsToShow={comments} />
            <AddComment asin={asin} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    );
  }
}

export default CommentArea;
