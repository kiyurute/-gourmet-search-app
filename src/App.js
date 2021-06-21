import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SearchPage from './SearchPage/SearchPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          this is gourmet-search-app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
