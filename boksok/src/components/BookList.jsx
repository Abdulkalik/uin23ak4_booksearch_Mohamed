import React, { useState, useEffect } from 'react';
import BookCard from './components/BookCard';

function BookList() {
  const [books, setBooks] = useEffect([]);

   const getbooks = async () =>{
     fetch(`https://openlibrary.org/search.json?title=james+bond`)
    .then(response => response.json())
    .then(data => setBooks(data.docs))
    .catch(error => console.error(error))
  }
    
    useEffect(() => {
      getbooks()
      console.log(books)
    }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}


export default BookList;

