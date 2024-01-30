import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNavComponent";
import MyFooter from "./components/MyFooterComponent";
import Alert from "./components/WelcomeComponent";

function App() {
  return (
    <div className="App">
      <header className="">
        <MyNav title="Magic" />
      </header>
      <Alert>
      <MyFooter tit1="NOI" tit2="I NOSTRI PRODOTTI" tit3="HOME"></MyFooter>
    </div>
  );
}

export default App;
