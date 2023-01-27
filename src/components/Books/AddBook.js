import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postNewBook } from '../../redux/books/books';
import Card from '../Interface/Card';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAuthorValid, setIsAuthorValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const categoryRef = useRef();
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    const bookTitle = event.target.value;
    setTitle(bookTitle);
    if (bookTitle.trim().length < 3 || bookTitle.trim().length > 55) {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
  };

  const handleAuthorChange = (event) => {
    const authorName = event.target.value;
    setAuthor(authorName);
    if (authorName.trim().length < 3 || authorName.trim().length > 25) {
      setIsAuthorValid(false);
    } else {
      setIsAuthorValid(true);
    }
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    if (isFormValid) {
      dispatch(
        postNewBook({
          title: title.trim(),
          author: author.trim(),
          category: categoryRef.current.value.trim(),
        }),
      );
      setTitle('');
      setAuthor('');
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    if (isTitleValid && isAuthorValid && title.trim().length !== 0 && author.trim().length !== 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isTitleValid, isAuthorValid, title, author]);

  return (
    <Card>
      <h3>Add New Book</h3>
      <form onSubmit={handleAddBook}>
        <div className={!isTitleValid ? 'invalid' : ''}>
          <p>{!isTitleValid && 'Book title should be 3 to 55 char long!'}</p>
          <input
            id="title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className={!isAuthorValid ? 'invalid' : ''}>
          <p>
            {!isAuthorValid && 'Book author name should be 3 to 25 char long!'}
          </p>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <select ref={categoryRef}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div>
          <button type="submit">Add book</button>
        </div>
      </form>
    </Card>
  );
};
export default AddBook;
