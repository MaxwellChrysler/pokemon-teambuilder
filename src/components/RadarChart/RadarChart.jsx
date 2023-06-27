import axios from "axios";
import { useState } from "react" 
import { useSelector, useDispatch } from "react-redux";

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



// useState in order to grab the pokemon object

function RadarChart() {
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
          pokemon.specialDefense,
          pokemon.specialAttack,
        ], // This is where I will need to be inserting each pokemons stats This will need to be conditionall rendered just like the results
        backgroundColor: "rgba(255,0,0, .2)",
        borderColor: ["rgba(255,99,132,.7)"],
      },
    ],
  };

  const options = {
    scales: {
      r: {
        max: 255,
        min: 0,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="graph" style={{ width: "425px", padding: "20px" }}>
      <Radar data={data} options={options}></Radar>
    </div>
  );


}

export default RadarChart;