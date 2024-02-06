import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "./Spinner";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
  };

  getComment = (asin) => {
    if (asin) {
      this.setState({ isLoading: true }); // Aggiungi questa riga

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
            isLoading: false,
          });
        })
        .catch((err) => {
          console.log("ERRORE NEL CONTATTARE IL SERVER", err);
          this.setState({ isLoading: false });
        });
    }
  };

  componentDidMount() {
    this.getComment(this.props.asin);
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      console.log("Nuovo asin:", this.props.asin);
      this.getComment(this.props.asin);
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div
          className="col-5 border border-2 border-black rounded-4 p-4 "
          style={{ width: 500 }}
        >
          {this.props.asin ? (
            <>
              {this.state.isLoading && <Spinner />}
              <CommentList commentsToShow={this.state.comments} />
              <AddComment asin={this.props.asin} />
            </>
          ) : (
            <p>Seleziona un libro per vedere i commenti</p>
          )}
        </div>
      </div>
    );
  }
}

export default CommentArea;
