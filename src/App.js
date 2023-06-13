import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
