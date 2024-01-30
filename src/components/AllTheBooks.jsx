import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

function BasicExample() {
  return (
    <div className="container">
      <div className="row justify-content-between g-2 mx-2">
        {horror.map((film) => (
          <Card
            className="col-2"
            key={film.id}
            style={{ width: "9rem", height: "60vh" }}
          >
            <Card.Img
              style={{ height: "20vh" }}
              variant="top"
              src={film.img}
              alt={film.title}
            />
            <Card.Body className="row flex-column justify-content-between">
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>
                {film.category} <br /> ${film.price}
              </Card.Text>
              <Button variant="warning">Buy it</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import horror from "../data/horror.json";
// import { Component } from "react";

// class BasicExample extends Component() {
//   render() {
//     return (
//       <div className="container">
//         <div className="row justify-content-between g-2 mx-2">
//           {horror.map((film) => (
//             <Card
//               className="col-2"
//               key={film.id}
//               style={{ width: "9rem", height: "60vh" }}
//             >
//               <Card.Img
//                 style={{ height: "20vh" }}
//                 variant="top"
//                 src={film.img}
//                 alt={film.title}
//               />
//               <Card.Body className="row flex-column justify-content-between">
//                 <Card.Title>{film.title}</Card.Title>
//                 <Card.Text>
//                   {film.category} <br /> ${film.price}
//                 </Card.Text>
//                 <Button variant="primary">Buy it</Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default BasicExample;
