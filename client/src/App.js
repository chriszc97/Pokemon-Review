import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Home from './compenonts/Home';
import React from 'react';
import NavBar from './compenonts/NavBar';
import Details from './compenonts/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>working</h1>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
