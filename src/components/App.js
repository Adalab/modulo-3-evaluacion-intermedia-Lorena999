import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

function App() {
  return (
    <div className="App">
      <PokeList />
    </div>
  );
}

export default App;
