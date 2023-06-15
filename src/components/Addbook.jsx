import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postBooks, getBooks } from '../redux/books/books';

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;

    try {
      await dispatch(postBooks([title, author]));
      setTitle('');
      setAuthor('');
      await dispatch(getBooks());
    } catch (error) { console.log(error); }
  };

  return (
    <Div>
      <h1>Add Book</h1>
      <form>
        <input
          type="text"
          className="title"
          placeholder="Title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          className="author"
          placeholder="Author"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button type="submit" className="add-button" onClick={add}>
          Add Book
        </button>
      </form>
    </Div>
  );
};

export default Addbook;

const Div = styled.div`
  border-top: 1px solid #e8e8e8;
  margin: 2rem 2.25rem;

  h1 {
    height: 1.5rem;
    margin: 1.813rem 32.75rem 1.188rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #4989d1;
  }
  form {
    display: flex;
    justify-content: space-between;

    .title {
      height: 2.813rem;
      border-radius: 4px;
      border: solid 1px #e1e1e1;
      background-color: #fff;
      padding-left: 1rem;
      width: 55.15%;
    }
    .author {
      height: 2.813rem;
      border-radius: 4px;
      border: solid 1px #e1e1e1;
      background-color: #fff;
      padding-left: 1rem;
      width: 23.67%;
    }
    .add-button {
      height: 2.813rem;
      border-radius: 3px;
      color: #fff;
      background-color: #2e90f0;
      width: 15.28%;
    }
  }
`;
