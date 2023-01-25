import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Interface/Header';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </>

);

export default App;
