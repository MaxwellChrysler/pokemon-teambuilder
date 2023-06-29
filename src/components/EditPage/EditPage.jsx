import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import ('./EditPage.css')
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function EditPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);



  
  return (
    <div className="container">
      {pokemon.map((selectedPokemon,i) => (
     <Card>
      <PokemonItem key={i} selectedPokemon={selectedPokemon} />
      <CardActions>
                  <Button variant="contained" size="small">remove from team</Button>
                  <Button variant="contained" size="small">give nick name</Button>
                </CardActions>
      </Card>
      ))}
     
      </div>
  );
}

export default EditPage;
