import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import("./TeamBuilder.css");

function TeamBuilder() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);

  useEffect(() => {
    // render on load i think lol
    dispatch({ type: "FETCH_POKEMON" });
  }, []);

const goToEditor = (event) =>{
  event.preventDefault();
  history.push('/editor')
}

  const getDetails = (id) => {
    console.log("details was clicked with an id", id);
    history.push(`/details/${id}`);
  };

  return (
    <div>
    <button onClick = {goToEditor} className="editbutton">Go to team editor</button>
    <div className="displayTeam">
     
      {pokemon.map((selectedPokemon, i) => (
        <Card >
          <PokemonItem key={i} selectedPokemon={selectedPokemon} />
          <CardActions>
            <Button variant="contained" size="small">
              misc
            </Button>
            {/* variant="contained"  prevents the color from becoming blue, I dont know where the blue color is coming from */}
            <Button
              onClick={() => getDetails(selectedPokemon.id)}
              className="details"
              size="small"
            >
              Details{" "}
            </Button>
            {/* <CardContent>
            <Typography variant="body2" color="text.secondary">
                  {selectedPokemon.name}'s pokedex entry is {selectedPokemon.pokeID}.
                 
                </Typography>
                </CardContent> */}
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default TeamBuilder;
