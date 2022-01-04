import React from 'react'
import {Card, } from 'react-bootstrap'

// displays individual books
// accept mapping props from booklists
function Book({ book }) {
    return (
        <div>
            
            <Card text='dark' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                    <Card.Text>{book.synopsis}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Book
