import React from 'react';
import AddBook from './Addbook';
import Book from './book';

const Books = () => {
  const bookList = [
    { title: 'I know Everything', author: 'Saki', id: 1 },
    { title: 'House of Stone', author: 'Gakii', id: 2 },
    { title: 'Hello Bye', author: 'Rafio', id: 3 },
  ];

  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
