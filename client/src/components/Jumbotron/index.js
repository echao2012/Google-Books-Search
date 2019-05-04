import React from "react";
import "./style.css"

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="outer">
      <div className="inner">
          <img className="img-fluid" src={require("./play-books-icon.png")} alt="logo" />
        <div className="text">
          <h1>Google Books Search</h1>
          <p className="lead">Search for and save books of interest.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Jumbotron;