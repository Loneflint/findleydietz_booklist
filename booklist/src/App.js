import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList'
import {useState} from 'react'


function App() {
  useState()
  const [bookList, setBookList] = useState([])
  const addBook = (book) => {
    setBookList([
      ...bookList, book
    ]) 
  }
  return (
    <div className="App">
      <header className="App-header">
      <BookForm addBook={addBook}/>
      <BookList bookList={bookList}/>
      </header>
    </div>
  );
}

export default App;
