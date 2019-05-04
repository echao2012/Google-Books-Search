import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location.pathname} />
        <Jumbotron />
        <div className="container-fluid">
          <BookList title="Saved Books">
            {!this.state.books.length ? (
              <h2 className="text-center text-muted">No Books to Display</h2>
            ) : (
              this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book._id}
                    bookData={book}
                    deleteOnClick={() => this.deleteBook(book._id)}
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

export default Saved;