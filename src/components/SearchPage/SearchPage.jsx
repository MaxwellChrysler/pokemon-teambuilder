import axios from "axios";
import "./SearchPage.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Input from "@mui/material/Input";

// Imports for Chart js
import {
  Chart as ChartJS,
  LineElement,
  RadialLinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Needed for Chart Js
ChartJS.register(
  LineElement,
  RadialLinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

function SearchPage() {
  const dispatch = useDispatch();
  const pokemonReducer = useSelector((store) => store.pokemon);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false); // this is to hold that data the this pokemon is the one that is currently being searched for
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    id: "",
    img: "",
    id: "",
    officalArt: "",
    hp: "",
    attack: "",
    defense: "",
    spAttack: "",
    spDefense: "",
    speed: "",
    type: "",
    type2: "", // This can stay but displaying the second type is a problem
    weight: "", // this should be forced to only take a level and will be set by the user as the API will not display a level
  }); // this is all done to provide empty strings rather than homeless data,
  // This is where we call for all of the data of the pokemon

  // This is for the radar chart
  const data = {
    labels: ["Hp", "Attack", "Defense", "Speed", "Sp. Defense", "Sp. Attack"],
    datasets: [
      {
        label: "Stats",
        data: [
          pokemon.hp,
          pokemon.attack,
          pokemon.defense,
          pokemon.speed,
          pokemon.spDefense,
          pokemon.spAttack,
        ], // This is where I will need to be inserting each pokemons stats This will need to be conditionall rendered just like the results
        backgroundColor: "rgba(255,0,0, .2)",
        borderColor: ["rgba(255,99,132,.7)"],
      },
    ],
  };
  // for the radar chart
 
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 20, // Adjust the font size of the Legend 
        },
      },
    },
  },
  scales: {
    r: {
      suggestedMax: 80,
      suggestedMin: 0,
      beginAtZero: true,
      pointLabels: {
        font: {
          size: 14, // Adjust the font size of the labels
        },
      },
    },
  },
};

  const searchPokemon = () => {
    // the ${pokemon} name is form usestate to dynaically change what the api is searching for based on the
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log("app axios get is working", response);

        setPokemon({
          name: pokemonName,
          id: response.data.id,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          shiny_img: response.data.sprites.front_shiny, //renders the shiny variany
          officalArt: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`,
          officalArtShiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${response.data.id}.png`,
          //  the route to get this needs to be modified
          // response.data.sprites.other.offical-artwork.front_default,
          // Examples "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{PokeID}.png"
          // this could be done with matching the id of the pokemon and just plug inthe id's for the team selection page
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          spAttack: response.data.stats[3].base_stat,
          spDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          type: response.data.types[0].type.name,
          // type2: response.data.types[1].type.name,
          weight: response.data.weight,
        });

        console.log(pokemon);

        setPokemonChosen(true); //this is to change the poke to be chosen after its info has been displayed
        setPokemonName("");
      })
      .catch((error) => {
        console.log("error in app getting pokemon", error);
      });
  };

  const addToTeam = (event) => {
    swal(pokemon.name, "Has been added to the team", "success", {
      timer: 1300,
      button: false,
    });

    event.preventDefault();
    console.log("search is:", pokemonName);
    dispatch({
      type: "POST_POKEMON", // This is for putting pokemon to team
      payload: pokemon, // This is in reference to the const
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokemon Picker</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);

            // this will take in user data that is then used to plug in to the api's url for searching
          }}
        />
        <button className="searchPokemon" onClick={searchPokemon}>
          Search
        </button>

        
      </header>

      {/* if a poke is not chosen prompt user to pick one if they have display their name */}

      <div className="displayPokemon">
        {!pokemonChosen ? (
          <h1>Search to add members to your team</h1>
        ) : (
          // Top of the screen

          <>
            <h1>{pokemon.name}</h1>

            {/* <img id="rendered-image" src={pokemon.shiny_img}/>  */}
            {/* <img id="rendered-image" src={pokemon.img} /> */}
            {/* <img id="rendered-image" src={pokemon.shiny_img} /> */}
            <img id="rendered-image" src={pokemon.officalArt} />
            {/* <img id="rendered-image" src={pokemon.officalArtShiny} /> */}
            <div className="graphs" style={{ width: "525px", padding: "20px", height:"400px" }}>
              <Radar
               data={data} options={options}></Radar>
            </div>

            
            <div className="addtoteam" >
  
              <img
              
                id="rendered-image"
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/2052px-Poké_Ball_icon.svg.png`}
                className="addtoteam"
                onClick={addToTeam}
              />
           
            </div>
         
          <div className="stat">
         
            <h3>ID: {pokemon.id}</h3>
            <h3>HP: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Special attack: {pokemon.spAttack}</h3>
            <h3>Special defense: {pokemon.spDefense}</h3>
            <h3>Speed: {pokemon.speed}</h3>
            <h3>Weight: {pokemon.weight}</h3>
            <h3>
              Type: {pokemon.type} {pokemon.type2}
            </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
