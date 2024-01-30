// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import horror from "../data/horror.json";

// function CardBooks() {
//   return (
//     <div className="container">
//       <div className="row justify-content-between g-2 mx-2">
//         {horror.map((film) => (
//           <Card
//             className="col-2"
//             key={film.id}
//             style={{ width: "9rem", height: "60vh" }}
//           >
//             <Card.Img
//               style={{ height: "20vh" }}
//               variant="top"
//               src={film.img}
//               alt={film.title}
//             />
//             <Card.Body className="row flex-column justify-content-between">
//               <Card.Title>{film.title}</Card.Title>
//               <Card.Text>
//                 {film.category} <br /> ${film.price}
//               </Card.Text>
//               <Button variant="warning">Buy it</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CardBooks;

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

class CardBooks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-evenly justify-content-sm-between g-4 mx-1">
          {horror.map((film) => (
            <Card
              key={film.asin}
              className="col-2 h-30 px-0 rounded-5"
              style={{ width: "15rem" }}
            >
              <Card.Img
                className="rounded-top-5"
                style={{ height: "20vh" }}
                variant="top"
                src={film.img}
                alt={film.title}
              />
              <Card.Body className="row flex-column justify-content-between mx-0">
                <Card.Title style={{ fontSize: "1em" }}>
                  {film.title}
                </Card.Title>
                <Card.Text>
                  {film.category} <br /> ${film.price}
                </Card.Text>
                <Button
                  className="rounded-4 fs-4 border-primary"
                  variant="warning"
                >
                  Buy it
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default CardBooks;
