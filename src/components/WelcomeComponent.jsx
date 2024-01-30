import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AdditionalContentExample() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handlePageClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      )}
      <div onClick={handlePageClick}>
        {/* Tuo contenuto della pagina */}
        <p className="text-danger fs-2">
          Ciao, questa è la nuova pagina ristorante
        </p>
      </div>
    </>
  );
}

export default AdditionalContentExample;
