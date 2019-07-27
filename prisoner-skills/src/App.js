import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";
import PrisonPopulation from './components/prison-population';
import PrisonerPage from './components/prisoner-page';
import { connect } from 'react-redux';
import { prisonLineup } from './actions'


// function App() {

class App extends React.Component {

  componentDidMount(props) {
    this.props.prisonLineup()
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <NavLink to='/' className='headerlink'>Home</NavLink>
          <NavLink to='' className='headerlink'>Log In</NavLink>
        </div>

        <Route path="/" exact component={PrisonPopulation} />
        <Route path="/prisoner/:id" exact component={PrisonerPage} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  prisonLineup: prisonLineup
}

export default connect(null, mapDispatchToProps)(App);
