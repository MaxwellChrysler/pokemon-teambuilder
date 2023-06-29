import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import("./TeamBuilder.css");

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function TeamBuilder() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);
  
//   useEffect(() => {
//     dispatch({ type: 'FETCH_POKEMON' }); 
//        <div key={movie.id} onClick={() => getDetails(movie)}>
// }, []);

useEffect(() => { // render on load i think lol
  dispatch({ type: "FETCH_POKEMON" });
}, []);

const getDetails = (id) => {

  console.log('details was clicked with an id', id)
  // dispatch ({type: 'GET_ONE_POKEMON', payload: id})
  history.push(`/details/${id}`)
}
// or is the type going to be fetch pokemon
// this.target.value or something


  return (
    <div className="displayTeam">
      {pokemon.map((selectedPokemon,i) => (
        <Card  >
        <PokemonItem key={i} selectedPokemon={selectedPokemon} />
        <CardActions>
                  <Button variant="contained" size="small">misc</Button>
                  <Button onClick={()=>getDetails(selectedPokemon.id)} className="details" size="small">Details </Button>
                </CardActions>
        </Card>
      ))}
 
    </div>
  );
}




export default TeamBuilder;
