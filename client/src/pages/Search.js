import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox"
import { BookList, BookListItem } from "../components/BookList";

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

  saveBook = bookData => {
    API.saveBook(bookData)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location.pathname} />
        <Jumbotron />
        <div className="container-fluid">
          <SearchBox
            name="bookSearch"
            value={this.state.bookSearch}
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
          <BookList title="Search Results">
            {!this.state.books.length ? (
              <h2 className="text-center text-muted">No Books to Display</h2>
            ) : (
              this.state.books.map(book => {
                const bookData = {
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : require("./book-cover-placeholder.jpg"),
                  link: book.volumeInfo.infoLink
                }
                return (
                  <BookListItem
                    key={book.id}
                    bookData={bookData}
                    saveOnClick={() => this.saveBook(bookData)}
                  />
                );
              })
            )}
          </BookList>
        </div>
      </div>
    );
  }
}

export default Search;