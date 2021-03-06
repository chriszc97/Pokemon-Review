import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import React from 'react';
import NavBar from './components/NavBar';
import Details from './components/Details';
import UpdateReview from './components/UpdateReview';
import Regions from './components/Regions';
import AddGame from './components/AddGame';
import About from './components/About';

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
          <Route path="/region" element={<Regions />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
