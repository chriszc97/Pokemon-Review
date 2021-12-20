import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

import Home from './compenonts/Home';
import React from 'react';
import NavBar from './compenonts/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
