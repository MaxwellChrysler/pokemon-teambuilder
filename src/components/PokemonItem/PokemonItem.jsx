import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
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

function PokemonItem () {
 

// This needs to import just one pokemon and then 
  const [creatureList, setCreatureList] = useState([
    {name: 'Pichu', origin: 'Gen 2', image: 'https://ssb.wiki.gallery/images/thumb/c/c1/Pichu_SSBU.png/1200px-Pichu_SSBU.png'},
    {name: 'Sphinx', origin: 'Egypt', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png'},
    {name: 'Jackalope', origin: 'America', image: 'https://archives.bulbagarden.net/media/upload/c/cf/0569Garbodor.png'}
  ]);
  
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Typography
          gutterBottom
          variant="h1"
          component="div">
            
        </Typography>
        <Grid container spacing={2}>
          {creatureList.map(creature => (
            // small screens and larger will display
            // 2 columns. Extra small screens will
            // by default display 1 column.
            <Grid display='flex' sx={{width: '100%'}} item sm={6} lg={3} key={creature.name}>
              <Card sx={{width: '100%'}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={creature.image}
                  title={creature.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                      {creature.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  > 
                    This creature is from {creature.origin}. You may also find this in your back yard during the summer.
                  </Typography>
                  <CardActions>
                    <Button variant='contained' size="small"></Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );

}

export default PokemonItem;
