import React from "react";

export function BookList(props) {
  return (
    <div className="card">
      <h5 className="card-header">Search Results</h5>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {props.children}
        </ul>
      </div>
    </div>
  );
}

export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10">
            <h3>{props.title}</h3>
            <h4>Written by: {props.authors.join(", ")}</h4>
          </div>
          <div className="col-sm-2">
            <a href={props.link} className="btn btn-primary" target="_blank">View</a>
            <button type="submit" className="btn btn-primary" onClick={props.saveOnClick}>Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={props.image} className="img-fluid" alt={props.title} />
          </div>
          <div className="col-sm-10">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </li>
  )
}