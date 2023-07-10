import React from "react";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import swal from "sweetalert";
import Grid from "@mui/material/Grid";

import "./EditPage.css";

function EditPage() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);
  const [nickname, setNickname] = useState("");
  const [click, setClick] = useState(true);

  const theme = createTheme({
    // material ui stuff
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
    swal(nickname, "has been removed from the team", "error", {
      timer: 1001,
      button: false,
    });
    console.log("testing params.id ", id);
    dispatch({
      type: "DELETE_POKEMON",
      payload: id,
    });
  };

  const goToBuilder = (event) => {
    event.preventDefault();
    history.push("/teambuilder");
  };

  const editNickname = (id) => {
    console.log("testing nick name", id);
    console.log(nickname);
    dispatch({
      type: "PUT_POKEMON",
      payload: { nickname, id },
    });
    setClick(!click);
  };

  const handleClick = () => {
    setClick(!click);
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
    <div>
      <button className="builderbutton" onClick={goToBuilder}>
        Return to Team
      </button>
      <div className="editContainer">
      <Grid container spacing={5}>
              {pokemon.map((pokemonItem, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card  sx={{ width: 360 }}
                  style={{ backgroundColor: getColor(pokemonItem.type) }}
                    // style={{ backgroundColor: "pink" }}
                    >
      <PokemonItem selectedPokemon={pokemonItem} />
            <CardActions>
              {click ? (
                <>
                  <Button
                     variant="contained"
                    onClick={() => deletePokemon(pokemonItem.id)}
                    size="small"
                  >
                    remove from team
                  </Button>

                  <Button 
                  variant="contained"onClick={handleClick}>edit nickname</Button>
                </>
              ) : (
                <>
                  <Button  variant="contained" onClick={handleClick}>cancel</Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => editNickname(pokemonItem.id)}
                  >
                    give nickname
                  </Button>

                  <form>
                    <input
                      type="text"
                      onChange={(event) => {
                        setNickname(event.target.value);
                      }}
                    />
                  </form>
                </>
              )}
            </CardActions>
          </Card>
          </Grid>

        ))}
        </Grid>
      </div>
    </div>
  );
}

export default EditPage;
