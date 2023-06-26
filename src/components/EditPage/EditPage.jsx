import React from 'react';
import ('./EditPage.css')

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function EditPage() {
  return (
    <div className="container">
      <p>Edit page </p>
    </div>
  );
}

export default EditPage;
