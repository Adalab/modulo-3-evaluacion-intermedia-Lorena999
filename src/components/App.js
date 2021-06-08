import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

function App() {
  return (
    <div className="App">
      <h1>Mi lista de pokemon</h1>
      <PokeList list={data} />
    </div>
  );
}
export default App;
