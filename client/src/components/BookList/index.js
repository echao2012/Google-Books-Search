import React from "react";

export function BookList(props) {
  return (
    <div className="card">
      <h5 className="card-header">{props.title}</h5>
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
            <h3>{props.bookData.title}</h3>
            <h4>Written by: {props.bookData.authors.join(", ")}</h4>
          </div>
          <div className="col-sm-2">
            <a href={props.bookData.link} className="btn btn-primary" target="_blank">View</a>
            {props.saveOnClick ? (
              <button type="submit" className="btn btn-primary" onClick={props.saveOnClick}>Save</button>
            ) : (
              <button type="submit" className="btn btn-primary" onClick={props.deleteOnClick}>Delete</button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={props.bookData.image} className="img-fluid" alt={props.bookData.title} />
          </div>
          <div className="col-sm-10">
            <p>{props.bookData.description}</p>
          </div>
        </div>
      </div>
    </li>
  )
}