import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './compenonts/Home';
import React from 'react';
import NavBar from './compenonts/NavBar';
import Details from './compenonts/Details';
import Reviews from './compenonts/Reviews';
import UpdateReview from './compenonts/UpdateReview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game/:id" element={<Details />} />
          <Route path="/reviewupdate/:id" element={<UpdateReview />} />
          <Route path="/review" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
