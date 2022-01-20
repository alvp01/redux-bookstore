import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [fieldValue, setValue] = useState({
    author: '',
    title: '',
    category: 'Action',
  });

  const changeInput = (event) => {
    setValue({
      ...fieldValue,
      [event.target.name]: event.target.value,
    });
  };

  const addBookToList = (event) => {
    event.preventDefault();
    if (fieldValue.title.trim() && fieldValue.author.trim()) {
      const newBook = {
        id: uuidv4(),
        author: fieldValue.author,
        title: fieldValue.title,
        category: fieldValue.category,
      };
      dispatch(addBook(newBook));
      setValue({
        title: '',
        author: '',
        category: 'Action',
      });
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={changeInput}
            value={fieldValue.title}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Book author"
            name="author"
            onChange={changeInput}
            value={fieldValue.author}
            required
          />
        </div>
        <div>
          <select
            onChange={changeInput}
            name="category"
            value={fieldValue.category}
          >
            <option>Action</option>
            <option>Classics</option>
            <option>Graphic Novel</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Horror</option>
            <option>Economy</option>
          </select>
        </div>
        <div className="col-md-2 pb-5 pb-md-0">
          <button type="submit" onClick={addBookToList}>
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
