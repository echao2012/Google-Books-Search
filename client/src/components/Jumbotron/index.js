import React from "react";
import "./style.css"

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1>Google Books Search</h1>
        <p className="lead">Search for and save books of interest.</p>
      </div>
    </div>
  );
}

export default Jumbotron;