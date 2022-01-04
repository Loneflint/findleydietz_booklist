import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {useState} from 'react'

function BookForm({addBook}) {
    const [book, setBook] = useState({})
    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(book) 
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <br/>
            <Form.Control onChange={handleChange} name='title' size="lg" type="text" placeholder="To Kill a Mockingbird" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Author</Form.Label>
            <br/>
            <Form.Control onChange={handleChange} name='author' size="lg" type="text" placeholder="Harper Lee" />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Synopsis</Form.Label>
            <br/>
            <Form.Control onChange={handleChange} name='synopsis' size="sm" type="text" placeholder="Boo, Scout, and Gregory play in a treehouse" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    )
}

export default BookForm
