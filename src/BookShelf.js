import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class BookShelf extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired,
      onMoveBook: PropTypes.func.isRequired
  }

  render () {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book onMoveBook={this.props.onMoveBook} key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
