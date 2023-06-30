import React from "react";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import("./EditPage.css");
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function EditPage() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: "#FF0000",
      },
      text: {
        secondary: "#FF0000",
      },
    },
    typography: {
      body2: {
        fontSize: "1.1em",
      },
    },
  });

  const selectedPokemon = pokemon.find((item) => item.id === Number(params.id)); 

  const deletePokemon = (id) => {
    console.log("testing params.id ", id); //pokemon.id is undefined
    dispatch({
      type: "DELETE_POKEMON",
      payload: id, // This is not being defind... how do I fix that
    });
  };

  return (
    <div className="container">
      {pokemon.map((selectedPokemon, i) => (
        <Card>
          <PokemonItem key={i} selectedPokemon={selectedPokemon} />
          <CardActions>
            <Button
            variant="contained"
              onClick={() => deletePokemon(selectedPokemon.id)}
              size="small"
            >
              remove from team
            </Button>
            <Button variant="contained" size="small">give nick name</Button>
            {/* <Button color = 'text.secondary'>Test</Button>
                  <Typography variant="body2" color="text.secondary">
                  {selectedPokemon.name}'s pokedex entry is {selectedPokemon.pokeID}.
                 
                </Typography> */}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default EditPage;
