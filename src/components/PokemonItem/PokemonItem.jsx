import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import ('./PokemonItem.css'); 

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#edf2ff',
    },
    text: {
      secondary: orange[500],
    },
  },
  typography: {
    body2: {
      fontSize: '1.1em',
    },
  },
});

function PokemonItem({selectedPokemon}) {
  const pokemon = useSelector((store) => store.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();
// console.log(selectedPokemon)

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON" });
  }, []);

  

  if (!pokemon || pokemon.length === 0) {
    return <div>Please add members to your team!...</div>;
  }

  // const  = pokemon[0]; // Accessing the first Pokemon This needs to be changed to be whatever pokemon is clicked on from
 

  // use params 
  return ( (selectedPokemon ?
    <div>
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Grid >
          <Grid > 
            <Card sx={{ width: 240 }} >
              <CardMedia sx={{ height: 200 }} image={selectedPokemon.officalArt} title={selectedPokemon.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedPokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedPokemon.name}'s pokedex entry is {selectedPokemon.pokeID}.
                 
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </div> : <div>
      loading
    </div>
  )
  );
}

export default PokemonItem;
// container spacing={2}
// item sm={6} lg={3}