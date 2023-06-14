import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './Addbook';
import Book from './book';

const Books = () => {
  const books = useSelector((store) => store.books.books);

  const saveBooksToLocalStorage = (items) => {
    localStorage.setItem('Allbooks', JSON.stringify(items));
  };

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
