import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((store) => store.books);

  return (
    <main>
      <ul>
        {books.books.map((book) => (<Book key={book.id} book={book} />))}
      </ul>
    </main>
  );
};

export default Books;
