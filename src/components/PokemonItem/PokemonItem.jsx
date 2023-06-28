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

function PokemonItem() {
  const pokemon = useSelector((store) => store.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON" });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/Details");

  };

  if (!pokemon || pokemon.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedPokemon = pokemon[1]; // Accessing the first Pokemon
  console.log(selectedPokemon.img,'image')

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item sm={6} lg={3}>
            <Card sx={{ width: '100%' }} style={{ backgroundColor: "white" }}>
              <CardMedia sx={{ height: 140 }} image={selectedPokemon.img} title={selectedPokemon.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedPokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This creature is from {selectedPokemon.id}.
                </Typography>
                <CardActions>
                  <Button variant="contained" size="small">Derp</Button>
                  <Button onClick={handleSubmit} className="details" size="small">Details</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default PokemonItem;
