import React from 'react';
import ('./SearchPage.css')

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function SearchPage() {
  return (
    <div className="container">
      <p>Search Page </p>
    </div>
  );
}

export default SearchPage;
