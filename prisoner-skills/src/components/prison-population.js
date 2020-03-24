import React from 'react';
import { connect } from 'react-redux';
import { prisonLineup } from '../actions'
import PrisonerCard from './prisoner-card'
import { Link } from "react-router-dom";



class PrisonPopulation extends React.Component {

  render() {
    if (this.props.fetchingPrisoners === true) {
      return <p>Rounding up the prisoners...</p>
    } else {
      return (
        <div className="prisonpop">
          {this.props.error === null
            ? null
            : <p>{this.props.error.response.data}</p>}

          {this.props.loggedIn === true
            ? <Link to='/NewPrisoner'>Add Prisoner</Link>
            : null}

          {this.props.loggedIn === true
            ? <h1>All your incarcerated people</h1>
            : <h3>Please log in or sign up</h3>}

          {this.props.loggedIn === true
            ? <PrisonerCard />
            : null}

        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  fetchingPrisoners: state.fetchingPrisoners,
  loggedIn: state.loggedIn,
  error: state.error
})

const mapDispatchToProps = {
  prisonLineup: prisonLineup
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonPopulation);
