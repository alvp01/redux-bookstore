import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import Categories from './pages/Categories';
import store from './redux/createState';
import './index.css';
import './app.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container d-flex flex-column justify-center align-center">
        <Navbar />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route exact path="/" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
