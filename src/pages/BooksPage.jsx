import React from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const BooksPage = () => (
  <div className="container">
    <BookList />
    <BookForm />
  </div>
);

export default BooksPage;
