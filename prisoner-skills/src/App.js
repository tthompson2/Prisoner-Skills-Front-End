import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";
import PrisonPopulation from './components/prison-population';
import PrisonerPage from './components/prisoner-page';
import LoginPage from './components/login-page';
import RegisterPage from './components/register-page'
import AddPrisoner from './components/add-prisoner-form'
import EditPrisoner from './components/edit-prisoner'
import { connect } from 'react-redux';
import { prisonLineup } from './actions';
import { logout } from './actions'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends React.Component {

  componentDidMount(props) {
    this.props.prisonLineup()
  }

  clickHandler = (evt) => {
    evt.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <Route exact path="/" component={NavBar} />
        </div>

        <Route exact path="/" component={PrisonPopulation} />
        <Route exact path="/prisoner/:id" component={PrisonerPage} />
        <Route exact path='/LoginPage' component={LoginPage} />
        <Route exact path='/SignUp' component={RegisterPage} />
        <Route exact path='/NewPrisoner' component={AddPrisoner} />
        <Route exact path='/prisoner/:id/edit' component={EditPrisoner} />
        <Route exact path="/" component={Footer} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = {
  prisonLineup: prisonLineup,
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
