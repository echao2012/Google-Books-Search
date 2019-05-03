import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import SearchBox from "../components/SearchBox"

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Search for books and update the books state
    API.searchBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location.pathname} />
        <div className="container-fluid">
          <SearchBox
            name="bookSearch"
            value={this.state.bookSearch}
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Search;