import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./TeamBuilder.css";

const theme = createTheme({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function TeamBuilder() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pokemon = useSelector((store) => store.pokemon);

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON" });
  }, []);

  const goToEditor = (event) => {
    event.preventDefault();
    history.push("/editor");
  };

  const getDetails = (id) => {
    console.log("details was clicked with an id", id);
    history.push(`/details/${id}`);

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
  
  return (
    <>
      {user.id ? (
        <div>
          <button onClick={goToEditor} className="editbutton">
            Go to team editor
          </button>
          <div className="displayTeam">
            <Grid container spacing={5}>
              {pokemon.map((selectedPokemon, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ width: 360, paddingTop: -5 }}
                    style={{ backgroundColor: getColor(selectedPokemon.type) }}
                  >
                    <PokemonItem selectedPokemon={selectedPokemon} />
                    <CardActions>
                      <Button
                        sx={{ marginLeft: 29, marginBottom:2 }}
                        variant="contained"
                        onClick={() => getDetails(selectedPokemon.id)}
                        className="detail"
                      >
                    Details
                      </Button>
                      <Button 
                           sx={{ marginLeft: 29, marginBottom:2 }}
                           variant="contained"
                           onClick={goToEditor} className="editbutton">

                        

                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <h1>Try logging in</h1>
      )}
    </>
  );
}

export default TeamBuilder;
