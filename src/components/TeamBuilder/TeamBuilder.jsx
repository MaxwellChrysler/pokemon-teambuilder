import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import("./TeamBuilder.css");

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function TeamBuilder() {
  const pokemon = useSelector((store) => store.pokemon);
  
  // const [pokemonTeam, setPokemonTeam] = useState([
  //   {
  //     name: pokemon.name,
  //     hp: pokemon.hp,
  //     attack: pokemon.attack,
  //     defense: pokemon.defense,
  //     speed: pokemon.speed,
  //     spDefense: pokemon.specialDefense,
  //     spAttack: pokemon.specialAttack,
  //     officalArtwork: pokemon.officalArtwork,
  //   },
  // ]);

// will need to do a .map for all the cards 



  return (
    <div className="displayTeam">
      {pokemon.map((selectedPokemon) => (
        <PokemonItem key={selectedPokemon.name} selectedPokemon={selectedPokemon} />
      ))}
    </div>
  );
}




export default TeamBuilder;
