import React from "react";
import "./style.css"

function SearchBox(props) {
  return (
    <div className="card">
      <h5 className="card-header">Book Search</h5>
      <div className="card-body m-3">
        <form className="input-group input-group-lg">
          <input type="text" className="form-control input-lg" placeholder="Search" name={props.name} value={props.value} onChange={props.onChange} />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary" onClick={props.onClick}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;