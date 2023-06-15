import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AddBook from './Addbook';
import Book from './book';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const Allbooks = Object.entries(books).reduce((bookarray, [id, listitem]) => {
    const booksWithId = listitem.map((book) => ({ ...book, id }));
    return [...bookarray, ...booksWithId];
  }, []);

  return (
    <Section>
      {isLoading ? (
        <LoadingSpinner>
          <Spinner />
        </LoadingSpinner>
      ) : (
        <Background>
          <ul>
            {Allbooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ul>
          <AddBook />
        </Background>
      )}
    </Section>
  );
};

export default Books;

const Section = styled.section``;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Background = styled.div`
  background-color: #fafafa;
`;
