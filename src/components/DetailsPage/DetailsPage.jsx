import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import ('./DetailsPage.css')
// import ('../PokemonItem.jsx')
// import ('../RadarChart.jax') Need to decide if I

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DetailsPage() {
  return (
    <div className="container">
      <p>Details page </p>
      <PokemonItem/>
    </div>
  );
}

export default DetailsPage;
