/* eslint-disable import/no-extraneous-dependencies */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBook(book.item_id));
  };
  return (
    <Listitems>
      <article className="left">
        <div className="book-details">
          <p className="genre">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <Button className="comments">Comments</Button>
          <Button
            className="remove"
            onClick={remove}
          >
            Remove
          </Button>
          <Button className="edit">Edit</Button>
        </div>
      </article>
      <article className="middle">
        <div className="circle">
          <CircularProgressbar value={60} />
        </div>
        <div className="progress-text">
          <p className="percentage">60%</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="right">
        <div className="current-chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">Chapter 13</p>
        </div>
        <Button className="update-progress">UPDATE PROGRESS</Button>
      </article>
    </Listitems>
  );
};

export default Book;

const Listitems = styled.li`
  display: flex;
  justify-content: space-between;
`;
