import React from "react";
import "../stylesheets/Pokelist.scss";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const pokeItems = props.list.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon pokemon={pokemon} handleFilter={props.handleFilter} />
      </li>
    );
  });

  return <ul className="list">{pokeItems}</ul>;
};
PokeList.propTypes = {
  id: PropTypes.number,
  list: PropTypes.array,
};

export default PokeList;
