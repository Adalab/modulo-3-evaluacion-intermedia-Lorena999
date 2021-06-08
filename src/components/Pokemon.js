import React from "react";

const Pokemon = (props) => {
  const pokemon = props.pokemon.types.map((type) => {
    return <div>{type}</div>;
  });
  return (
    <article className="pokemon">
      <img src={props.pokemon.url} alt="" />
      <h2 className="pokemon__name">{props.pokemon.name}</h2>
      <div>{pokemon}</div>
    </article>
  );
};

export default Pokemon;
