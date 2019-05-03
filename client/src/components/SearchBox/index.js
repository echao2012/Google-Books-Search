import React from "react";

function SearchBox(props) {
  return (
    <div className="card">
      <h5 className="card-header">Book Search</h5>
      <div className="card-body">
        <form>
          <input type="text" className="form-control" placeholder="Search" name={props.name} value={props.value} onChange={props.onChange} />
          <button type="submit" className="btn btn-primary" onClick={props.onClick}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;