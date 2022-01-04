import './App.css';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Form className=''>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <br/>
            <Form.Control size="lg" type="text" placeholder="To Kill a Mockingbird" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Author</Form.Label>
            <br/>
            <Form.Control size="lg" type="text" placeholder="Harper Lee" />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Synopsis</Form.Label>
            <br/>
            <Form.Control size="sm" type="text" placeholder="Boo, Scout, and Gregory play in a treehouse" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
