import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNavComponent";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import CardBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <header className="">
        <MyNav title="Magic" />
      </header>
      <main className="">
        <Welcome />
        <CardBooks />
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
