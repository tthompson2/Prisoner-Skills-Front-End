import React from 'react';
import { connect } from 'react-redux';
import { prisonLineup } from '../actions'
import PrisonerCard from './prisoner-card'


class PrisonPopulation extends React.Component {

  componentDidMount(props) {
    this.props.prisonLineup()
  }

  render() {
    if(this.props.fetchingPrisoners === true) {
      return <p>Rounding up the prisoners...</p>
    } else {
      return (
        <div>
          <PrisonerCard />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingPrisoners: state.fetchingPrisoners
  }
}

const mapDispatchToProps = {
  prisonLineup: prisonLineup
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonPopulation);
