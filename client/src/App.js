import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './compenonts/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={Home} />
      </switch>
    </div>
  );
}

export default App;
