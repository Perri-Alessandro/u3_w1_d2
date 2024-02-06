import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    rate: "1",
    comment: "",
    elementId: asin,
  });

  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin,
    }));
  }, [asin]);

  const sendComment = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        if (response.ok) {
          alert("RECENSIONE SALVATA");
          setComment({
            comment: "",
            rate: "1",
            elementId: asin,
          });
          return response.json();
        } else {
          alert("LA RECENSIONE NON è STATA SALVATA");
        }
      })
      .catch((err) => {
        console.log("POST, ERRORE NELLA COMUNICAZIONE CON IL SERVER", err);
      });
  };

  return (
    <Form onSubmit={sendComment}>
      <Form.Label className="my-2">
        Lascia qui sotto una recensione ed un voto
      </Form.Label>
      <Form.Control
        className="border-secondary rounded-3"
        value={comment.comment}
        onChange={(e) =>
          setComment({
            ...comment,
            comment: e.target.value,
          })
        }
      />
      <Form.Select
        className="mt-1 border-secondary rounded-3"
        value={comment.rate}
        onChange={(e) =>
          setComment({
            ...comment,
            rate: e.target.value,
          })
        }
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Select>
      <Button className="rounded-4 mt-3 border-warning border-2" type="submit">
        INVIA RECENSIONE
      </Button>
    </Form>
  );
};

export default AddComment;
