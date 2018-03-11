import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {

  state = {
    books: []
  }

  handleKeyUp = (e) => {
    BooksAPI.search(e.target.value).then((books) => {
      if (Array.isArray(books)) {
          this.setState({books})
      }
      else {
        this.setState({books: []})
      }

    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyUp={this.handleKeyUp}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
