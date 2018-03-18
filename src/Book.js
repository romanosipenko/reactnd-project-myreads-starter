import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

class Book extends Component {

  handleMove = (e) => {
    this.props.onMoveBook(this.props.book, e.target.value);
  }

  render () {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ this.props.book.imageLinks.smallThumbnail +')' }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleMove} value={this.props.book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {/* There are some rare cases when .authors is not defined and we have to handle this */}
          {this.props.book.authors &&
            <div className="book-authors">{this.props.book.authors.join(', ')}</div>
          }
        </div>
      </li>
    )
  }
}

export default Book
