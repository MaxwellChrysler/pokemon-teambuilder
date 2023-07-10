import React from "react";
import { useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import("./DetailsPage.css");
import RadarChart from "../RadarChart/RadarChart";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// import for chart js
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

function Details() {
  const pokemon = useSelector((store) => store.pokemon);
  const params = useParams();
  const selectedPokemon = pokemon.find((item) => item.id === Number(params.id)); // Selecting the first Pokemon

  const data = {
    labels: ["Hp", "Attack", "Defense", "Speed", "Sp. Defense", "Sp. Attack"],
    
    datasets: [
      {
        label: "Stats",
        
        data: [
          selectedPokemon.hp,
          selectedPokemon.attack,
          selectedPokemon.defense,
          selectedPokemon.speed,
          selectedPokemon.spDefense,
          selectedPokemon.spAttack,
        ], // This is where I will need to be inserting each pokemons stats This will need to be conditionall rendered just like the results
        backgroundColor: "rgba(255,0,0, .2)",
        borderColor: ["rgba(255,99,132,.7)"],
      },
    ],
  };


  const determineGeneration = (pokeID) => {
    if (pokeID <= 151) {
      return 1;
    } else if (pokeID <= 251) {
      return 2;
    } else if (pokeID <= 386) {
      return 3;
    } else if (pokeID <= 493) {
      return 4;
    } else if (pokeID <= 649) {
      return 5;
    } else if (pokeID <= 721) {
      return 6;
    } else if (pokeID <= 809) {
      return 7;
    } else if (pokeID <= 898) {
      return 8;
    } else if (pokeID <= 1010) {
      // This the current amount
      return 9;
    }
  };

  function getRegionFromGeneration(generation) {
    // display what region each pokemon is from based off
    switch (generation) {
      case 1:
        return "Kanto";
      case 2:
        return "Johto";
      case 3:
        return "Hoenn";
      case 4:
        return "Sinnoh";
      case 5:
        return "Unova";
      case 6:
        return "Kalos";
      case 7:
        return "Alola";
      case 8:
        return "Galar";
      default:
        return "Paldia";
    }
  }
// for the radar chart
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 16, // Specify the desired font size here
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
          size: 16, // Specify the desired font size here
        },
      },
    },
  },
};



  const getColor = (type) => {
    switch (type) {
      case "normal":
        return "grey";
      case "fire":
        return "red";
      case "water":
        return "blue";
      case "grass":
        return "green";
      case "electric":
        return "yellow";
      case "ice":
        return "lightblue";
      case "fighting":
        return "orange";
      case "poison":
        return "purple";
      case "ground":
        return "brown";
      case "flying":
        return "skyblue";
      case "psychic":
        return "pink";
      case "bug":
        return "lime";
      case "rock":
        return "brown";
      case "ghost":
        return "darkviolet";
      case "dark":
        return "black";
      case "dragon":
        return "indigo";
      case "steel":
        return "silver";
      case "fairy":
        return "lightpink";
      default:
        return "grey"; // Default color
    }
  };
  
  if (!pokemon || pokemon.length === 0) {
    return <div>You should add pokemon to your team</div>; // if theres nothing in the array it will display this instead of nothing
  }

  return (
    <div>
      <div className="displayTeam">
      <Card
                    sx={{ width: 360 }}
                    style={{ backgroundColor: getColor(selectedPokemon.type) }}
                  >
        <PokemonItem selectedPokemon={selectedPokemon} />
        </Card>
      </div>
      <div className="graph" style={{ width: "550px", padding: "20px" }}>
        <Radar data={data} options={options}></Radar>
      </div>
      <div className="details">
       
        <img  src={selectedPokemon.img} />
        <div className="detailsText">
          
          <h3>
            This is the rare shiny form. {" "}
            {selectedPokemon.nickname} is from the{" "}
            {determineGeneration(selectedPokemon.pokeID)} generation and from
            the{" "}
            {getRegionFromGeneration(determineGeneration(selectedPokemon.pokeID)
            )}{" "}
            region. {selectedPokemon.name} has a weight stat of{" "}
            {selectedPokemon.weight}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Details;
