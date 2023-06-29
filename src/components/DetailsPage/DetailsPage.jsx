import React from "react";
import { useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import ("./DetailsPage.css");

function Details() {
  const pokemon = useSelector((store) => store.pokemon);
  
  if (!pokemon || pokemon.length === 0) {
    return <div>You should add pokemon to your team</div>; // if theres nothing in the array it will display this instead of nothing
  }

  const selectedPokemon = pokemon[1]; // Selecting the first Pokemon 

  
  return (
    <div className="displayTeam">
      <PokemonItem
      
       selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default Details;




// function Details() {
//   const history = useHistory();
// const details = useSelector(store => store.details)
// const genres = useSelector(store => store.genres)// probably should be genres not sure


  
//   const handleSubmit = (event) => {
//     // function for button that switches back to the home page
//     event.preventDefault();
//     history.push("/");
//   };
//   return (
//     <div>
//       <h1> Movie Details</h1>
//       <p>{details.description}</p>
   

//       <button className="switchPages" onClick={handleSubmit}>
//         Go to back to movie list

//       </button>
//       {genres.map((genre,i)=> (
//                     <div>
//                       <p key={i}>{genre.category}</p>
//                       </div>
//                 ))}
//     </div>
//   );
// }

// export default Details;
