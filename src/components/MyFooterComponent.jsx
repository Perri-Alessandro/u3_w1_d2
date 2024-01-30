const MyFooter = (param) => (
  <footer className="container-fluid bg-black text-white fixed-bottom">
    <div className="row justify-content-between mt-2">
      <div className="col">
        <div className="row flex-column">
          {param.tit1}
          <div className="col mt-2">Our History</div>
          <div className="col">Lavora con noi</div>
          <div className="col">Contattaci</div>
        </div>
      </div>
      <div className="col">
        <div className="row flex-column">
          {param.tit2}
          <div className="col mt-2">I prodotti più venduti</div>
          <div className="col">Le nostre esclusività</div>
          <div className="col">Ordina ora</div>
          <div className="col">Ciao</div>
        </div>
      </div>
      <div className="col">
        <div className="row flex-column">
          {param.tit3}
          <div className="col mt-2">uee</div>
          <div className="col">ueee</div>
          <div className="col">ueeeee</div>
          <div className="col">ueeeeeee</div>
        </div>
      </div>
    </div>
  </footer>
);

export default MyFooter;
