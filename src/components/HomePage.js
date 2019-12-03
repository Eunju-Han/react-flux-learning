import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pularsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <a href="/about">About</a>
    </div>
  );
}

export default HomePage;

//Traditionally, if only a single item is being exported, it is declared as the "default".
