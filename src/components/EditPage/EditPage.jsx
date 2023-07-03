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
import { useState } from "react";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function EditPage() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);
  const [nickname, setNickname] = useState("");



  const theme = createTheme({ // material ui stuff
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

  const selectedPokemon = pokemon.find((item) => item.id === Number(params.id)); // used to bring in id for delete to use

  const deletePokemon = (id) => { 
    console.log("testing params.id ", id); 
    dispatch({
      type: "DELETE_POKEMON",
      payload: id, 
    });
  };

  const goToBuilder = (event) =>{
    event.preventDefault();
    history.push('/teambuilder')
  }

  // ham will return the currently set nickname which is going to be the default name of the pokemon
  // nick name is what I want them to be named

  const editNickname = (ham,id) =>{
    console.log('testing nick name' , ham, id,nickname);
    dispatch({
      type: "PUT_POKEMON",
      payload: {nickname,id}
    })
  }

  

  return (
    <div>
      <button className ="builderbutton"onClick = {goToBuilder}> 
Return to view
      </button>
    <div className="container">
      {pokemon.map((selectedPokemon, i) => (
        <Card style={{backgroundColor: "red"}} >
          <PokemonItem key={i} selectedPokemon={selectedPokemon} />
          <CardActions>
            <Button
              variant="contained"
              onClick={() => deletePokemon(selectedPokemon.id)}
              size="small"
            >
              remove from team
            </Button>
            <Button variant="contained" size="small" onClick={() => editNickname(selectedPokemon.nickname , selectedPokemon.id)}>
              give nick name
            </Button>
            <form>
              <input
              type="text"
          onChange={(event) => {
            setNickname(event.target.value);  // usestate setnick name to what is typed in the input field
            
          }}
          />
            </form>
            {/* <Button color = 'text.secondary'>Test</Button>
                  <Typography variant="body2" color="text.secondary">
                  {selectedPokemon.name}'s pokedex entry is {selectedPokemon.pokeID}.
                 
                </Typography> */}
          </CardActions>
        </Card>
      ))}

</div>
      
    </div>
  );
}

export default EditPage;
