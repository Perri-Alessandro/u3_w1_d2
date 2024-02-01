import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  const [showAlert, setShowAlert] = useState(true);

  const chiudiAlert = () => {
    setShowAlert(false);
  };

  const pageClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={chiudiAlert} dismissible>
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>Welcome in my new restaurant page</p>
          <hr />
          <p className="mb-0">
            Click on the card image to read or add a comments
          </p>
        </Alert>
      )}
      <div onClick={pageClick}>
        {/* Tuo contenuto della pagina */}
        <p className=" text-danger fs-5">Click here to hide the alert</p>
      </div>
    </>
  );
}

export default Welcome;
