import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";
import PrisonPopulation from './components/prison-population'

function App() {
  return (
    <div className="App">
      <PrisonPopulation />
    </div>
  );
}

export default App;
