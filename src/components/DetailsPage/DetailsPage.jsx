import React from "react";
import { useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import ("./DetailsPage.css");

function TeamBuilder() {
  const pokemon = useSelector((store) => store.pokemon);
  
  if (!pokemon || pokemon.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedPokemon = pokemon[0]; // Selecting the first Pokemon

  return (
    <div className="displayTeam">
      <PokemonItem selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default TeamBuilder;
