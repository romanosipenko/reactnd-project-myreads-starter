import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      onMoveBook: PropTypes.func.isRequired
  }

  state = {
    booksSearch: []
  }

  handleKeyUp = (e) => {
    BooksAPI.search(e.target.value).then((booksSearch) => {
      if (Array.isArray(booksSearch)) {
        booksSearch = booksSearch.map((book) => {
          const sameBook = this.props.books.filter((bookInShelf) => bookInShelf.id === book.id)
          book.shelf = sameBook.length > 0 ? sameBook[0].shelf : 'none'

          return book
        })
        this.setState({booksSearch})
      }
      else {
        this.setState({booksSearch: []})
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
            {this.state.booksSearch.map((book) => (
              <Book key={book.id} book={book} onMoveBook={this.props.onMoveBook}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
