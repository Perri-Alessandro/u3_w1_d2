import React, { useState, useEffect } from "react";

const CommentList = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response, "IN COMUNICAZIONE CON IL SERVER, FETCH GET");
          return response.json();
        } else {
          throw new Error(
            "ERRORE DI ACCESSO IN COMUNICAZIONE CON SERVER (FETCH GET) "
          );
        }
      })
      .then((data) => {
        console.log(data, "HO RICEVUTO I SEGUENTI DATI DAL SERVER");
        setComments(data);
      })
      .catch((error) => {
        console.error("ERRORE IN INVIO DATI A SERVER (FETCH GET) :", error);
      });
  }, [bookId]);

  return (
    <div>
      <h3>Recensioni</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
