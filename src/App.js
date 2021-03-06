import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SearchPage from './SearchPage/SearchPage.js';
import Detail from './Detail/Detail.js';
import Favorite from './Favorite/Favorite.js';
import FavDetail from './FavDetail/FavDetail.js';

function App() {
  return (
    <Router>
        <Route path='/' exact component={SearchPage} />
        <Route path='/detail' component={Detail} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/favdetail' component={FavDetail} />
    </Router>
  );
}

export default App;
