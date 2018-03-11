import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
import Book from './Book'


class BookShelf extends Component {

  render () {
    // Question is: what is more optimal, filter whole books collection
    // inside each component or provide subset of books inside parent component?
    let booksToDisplay = this.props.books.filter((book) => book.shelf === this.props.purpose);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksToDisplay.map((book) => (
              <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
