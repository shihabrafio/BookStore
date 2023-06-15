import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteBooks, getBooks } from '../redux/books/books';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const remove = async () => {
    try {
      await dispatch(deleteBooks(book.id));
      await dispatch(getBooks());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Listitems>
      <article className="first">
        <div className="book-details">
          <p className="genre">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <Button className="comments">Comments</Button>
          <Button
            className="remove"
            onClick={() => remove()}
          >
            Remove
          </Button>
          <Button className="edit">Edit</Button>
        </div>
      </article>
      <article className="second">
        <div className="circle">
          <CircularProgressbar value={90} />
        </div>
        <div className="progress-text">
          <p className="percentage">90%</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="last">
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
  border-radius: 4px;
  border: solid 1px #e1e1e1;
  background-color: var(--white-two);
  margin-bottom: 2%;
  padding-left: 2%;
  padding-bottom: 2%;
  font-family: 'Roboto Slab', serif;
  font:  url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

  .first {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    .book-details {
        .genre {
            height: 1.125rem;
            opacity: 0.5;
            font-size: 0.875rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
            margin-bottom: -3%;
        }
        .title {
            height: 1.813rem;
            font-size: 1.375rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.2px;
            color: #121212;
            margin-bottom: 0%;
        }
        .author {
            height: 1.188rem;
            margin: 0.25rem 0 0;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
        }
    }
    .interactions {
        padding-top: 1rem;
        margin: 0.188rem 0.938rem 0.125rem 0;

        .comments {
            margin: 0.188rem 0 0.125rem 0;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fff;
            border: none;
            padding-left: 0%;
        }
        .remove {
            height: 1.188rem;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fafafa;
            border-right: 1px solid #e8e8e8;
            border-left: 1px solid #e8e8e8;
            border-top: none;
            border-bottom: none;
            padding: 0 0.938rem;
            margin: 0 0.938rem;
        }
        .edit {
            height: 1.188rem;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fff;
            border: none;
        }
    }
 }

 .second {
    display: flex;
    align-items: center;
    
    .circle {
      max-width: 6.25rem;
    }
    .progress-text {
        border-right: 1px solid #e8e8e8;
        
        .percentage {
            height: 2.438rem;
            margin: 0.063rem 5.75rem 0 0.688rem;
            font-size: 2rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
        .completed {
            height: 1.125rem;
            margin: 0.438rem 4.938rem 0.75rem 0.75rem;
            opacity: 0.5;
            font-size: 0.875rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
    }
}
.last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16%;

    .current-chapter-container {
        .current-chapter {
            height: 1.125rem;
            // margin: 0.063rem 3.625rem 0 3.688rem;
            opacity: 0.5;
            font-size: 0.813rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
        .book-chapter {
            height: 1.313rem;
            margin: 0.438rem 0 0.25rem 0;
            font-size: 1rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.4px;
            color: #121212;
        }
    }
    .update-progress {
        margin: 0.75rem 0 0.563rem 0;
        padding: 0.438rem 1.188rem 0.5rem 1.375rem;
        border-radius: 3px;
        background-color: #2e90f0;
        color: #c3daf0;
    }
}
`;
