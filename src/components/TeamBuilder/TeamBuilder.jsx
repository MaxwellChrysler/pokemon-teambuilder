import React from 'react';
import ('./TeamBuilder.css')

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function TeamBuilder() {
  return (
    <div className="container">
      <p>TeamBuilder page </p>
    </div>
  );
}

export default TeamBuilder;
