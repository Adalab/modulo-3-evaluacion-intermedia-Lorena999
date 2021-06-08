import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeItems = props.list.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon pokemon={item} />
      </li>
    );
  });
  return <ul className="list">{pokeItems}</ul>;
};
export default PokeList;
