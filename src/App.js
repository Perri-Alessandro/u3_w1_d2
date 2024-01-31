import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MyNav from "./components/MyNavComponent";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import CardBooks from "./components/AllTheBooks";
import horror from "./data/horror.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <header className="">
        <MyNav title="Magic" handleSearch={handleSearch} />
      </header>
      <main className="">
        <Welcome />
        <CardBooks films={horror} searchTerm={searchTerm} />
      </main>
      <MyFooter
        tit1="NOI"
        tit2="I NOSTRI PRODOTTI"
        tit3="HOME"
        tit4="PROVA"
      ></MyFooter>
    </div>
  );
}

export default App;
