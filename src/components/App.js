import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";
import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [pokemons] = useState(data);
  const [favFilter, setFavFilter] = useState([]);

  const handleFilter = (clickedId) => {
    const pokemonSelected = favFilter.findIndex((fav) => {
      return fav.id === clickedId;
    });
    if (pokemonSelected === -1) {
      const pokemonCliked = pokemons.find((pokemon) => {
        return pokemon.id === clickedId;
      });
      favFilter.push(pokemonCliked);
      setFavFilter([...favFilter]);
    } else {
      //si está en favoritos lo quitamos
      favFilter.splice(pokemonSelected, 1);
      setFavFilter([...favFilter]);
    }
  };

  return (
    <>
      <div className="App">
        <header>
          <h1 className="title1">Mi lista de pokemon</h1>
        </header>

        <main>
          <section>
            <PokeList list={pokemons} handleFilter={handleFilter} />
          </section>
          <section>
            <h2>Pokemons favoritos</h2>
          </section>
        </main>
      </div>
    </>
  );
}
App.propTypes = {
  pokemons: PropTypes.object,
};

export default App;
