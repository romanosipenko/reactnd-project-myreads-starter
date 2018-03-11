import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf purpose='currentlyReading' title='Currently Reading' books={this.props.books}/>
            <BookShelf purpose='wantToRead' title='Want to Read' books={this.props.books}/>
            <BookShelf purpose='read' title='Read' books={this.props.books}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search/'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
