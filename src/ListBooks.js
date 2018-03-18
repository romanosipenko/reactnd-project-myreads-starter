import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.props.books.filter((book) => book.shelf === 'read')


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf onMoveBook={this.props.onMoveBook} title='Currently Reading' books={currentlyReading}/>
            <BookShelf onMoveBook={this.props.onMoveBook} title='Want to Read' books={wantToRead}/>
            <BookShelf onMoveBook={this.props.onMoveBook} title='Read' books={read}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
