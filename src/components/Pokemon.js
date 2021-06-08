import React from "react";

const Pokemon = (props) => {
  const pokemon = props.pokemon.types.map((type, index) => {
    return (
      <li className="pokemon-list-type" key={index}>
        {type}
      </li>
    );
  });
  return (
    <article className="pokemon">
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

export default Pokemon;
