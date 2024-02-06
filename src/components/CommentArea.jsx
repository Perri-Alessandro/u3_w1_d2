import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComment(asin);
  }, [asin]);

  const getComment = (asin) => {
    if (asin) {
      setIsLoading(true);

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
          // this.setState({
          //   comments: arrayData,
          //   isLoading: false,
          // });
          setComments(arrayData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("ERRORE NEL CONTATTARE IL SERVER", err);
          setIsLoading(false);
        });
    }
  };

  // componentDidMount() {
  //   this.getComment(this.props.asin);
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.asin !== prevProps.asin) {
  //     console.log("Nuovo asin:", this.props.asin);
  //     this.getComment(this.props.asin);
  //   }
  // }

  return (
    <div className="row justify-content-center">
      <div
        className="col-5 border border-2 border-black rounded-4 p-4 "
        style={{ width: 500 }}
      >
        {asin ? (
          <>
            {isLoading && <Spinner />}
            <CommentList commentsToShow={comments} />
            <AddComment asin={asin} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    </div>
  );
};

export default CommentArea;
