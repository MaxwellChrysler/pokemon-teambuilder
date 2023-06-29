import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import ('./EditPage.css')
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function EditPage() {

  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemon);

 
const selectedPokemon = pokemon.find(item=> item.id === Number(params.id));

  const deletePokemon = (id) =>{
    console.log(pokemon[1].name,'test') //pokemon.id is undefined
      dispatch({
          type: 'DELETE_POKEMON',
          payload: id // same issue as details
          
      })
  }


  return (
    <div className="container">
      {pokemon.map((selectedPokemon,i) => (
     <Card>
      <PokemonItem key={i} selectedPokemon={selectedPokemon} />
      <CardActions>
                  <Button onClick={ () => deletePokemon(selectedPokemon.id)}variant="contained" size="small">remove from team</Button>
                  <Button variant="contained" size="small">give nick name</Button>
                </CardActions>
      </Card>
      ))}
     
      </div>
  );
}

export default EditPage;

// function Item({item}){
//   // console.log(item);
//   const user = useSelector((store) => store.user)

//   const dispatch = useDispatch();

//   const deleteItem = () =>{
//       dispatch({
//           type: 'DELETE_ITEMS',
//           payload: item.id
//       })
//   }