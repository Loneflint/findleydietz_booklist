import React from 'react'
import Book from './Book'

function BookList({bookList}) {
    return (
        <div>
            {bookList.map((book, index) => {
                return <Book book={book}/>
            })}
        </div>
    )
}

export default BookList
