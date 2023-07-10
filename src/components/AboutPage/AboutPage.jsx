import React from 'react';
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about">
      <div>
        <h3>Stack technolgy</h3>
        <p>

Node
</p>
<p>Express</p>
<p>React</p>
<p>Postgresql</p>
<p>Heroku</p>
<h3> design tools

</h3>
<p>DB designer
</p>
<p>Figma</p>

<h3>specialty</h3>
<p>PokeAPI</p>
<p>Material UI (mui)</p>
<p>Any Chart - radar </p>
<p>Sweet alrts</p>



      </div>
    </div>
  );
}

export default AboutPage;
