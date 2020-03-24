import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const PrisonerCard = (props) => {
  return (
    <div className='prisoner-container'>
      {props.prisoners.map((person) => {
        return (
          <Link to={`/prisoner/${person.id}`} key={person.id} className='prisoner-card'>
            <p>{person.name}</p>
            <p>{`Can work: ${person.canHaveWorkLeave}`}</p>
          </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    prisoners: state.prisoners
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonerCard)
