import React from "react";
import { useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import ("./DetailsPage.css");
import RadarChart from '../RadarChart/RadarChart'
import { useParams } from "react-router-dom";

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
  const selectedPokemon = pokemon.find(item=> item.id === Number(params.id)); // Selecting the first Pokemon 

  

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
// for the radar chart
  const options = {
    scales: {
      r: {
        max: 255,
        min: 0,
        beginAtZero: true,
      },
    },
  };
  
  if (!pokemon || pokemon.length === 0) {
    return <div>You should add pokemon to your team</div>; // if theres nothing in the array it will display this instead of nothing
  }

  

console.log(selectedPokemon)
console.log(selectedPokemon.hp)
console.log(params)
  
  
  return (
    <div>
    <div className="displayTeam">
      <PokemonItem
      
       selectedPokemon={selectedPokemon} 
       
       
       />
       </div>
            <div className="graph" style={{ width: "425px", padding: "20px" }}>
              <Radar data={data} options={options}></Radar>
            </div> 


    </div>
   
  );
}

export default Details;




