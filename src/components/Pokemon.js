import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const pokemon = props.pokemon.types.map((type, index) => {
    return (
      <li className="pokemon-list-type" key={index}>
        {type}
      </li>
    );
  });

  const handleClick = (ev) => {
    props.handleFilter(props.pokemon.id);
  };

  return (
    <article className="pokemon" onClick={handleClick}>
      <img
        className="pokemon_image"
        src={props.pokemon.url}
        alt={props.pokemon.name}
      />
      <h2 className="pokemon_name">{props.pokemon.name}</h2>
      <ul className="pokemon_list">{pokemon}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};
