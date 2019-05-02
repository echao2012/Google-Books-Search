import axios from "axios";

export default {
  // Search for a book using the Google Books API
  searchBooks: function(query) {
    return axios.get("/api/books/search", { params: { q: query } });
  },
  // Gets all saved books from the database
  getBooks: function() {
    return axios.get("/api/books")
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData)
  },
  // Deletes a book from the database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};