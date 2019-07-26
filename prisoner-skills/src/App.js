import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";
import PrisonPopulation from './components/prison-population'
import PrisonerPage from './components/prisoner-page'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={PrisonPopulation} />
      <Route path="/prisoner/:id" exact component={PrisonerPage} />
    </div>
  );
}

export default App;
