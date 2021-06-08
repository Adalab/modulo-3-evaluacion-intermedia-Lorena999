import React from "react";

const Pokemon = (props) => {
  const pokemon = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="pokemon">
      <img src={props.pokemon.url} alt="" />
      <h2 className="pokemon__name">{props.pokemon.name}</h2>
      <ul>{pokemon}</ul>
    </article>
  );
};

export default Pokemon;
