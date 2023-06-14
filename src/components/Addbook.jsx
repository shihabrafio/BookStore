import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const add = (event) => {
    event.preventDefault();
    if (!title && !author) return;
    dispatch(addBook([title, author]));
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
      <input type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="text" placeholder="Author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
      <button type="submit" onClick={add}>Add Book</button>
    </form>
  );
};

export default Addbook;
