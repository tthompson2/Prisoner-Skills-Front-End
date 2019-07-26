import React from "react";
import { connect } from 'react-redux';

const PrisonerPage = (props) => {
  const pers = props.prisoners.find( p => String(p.id) === props.match.params.id)
  console.log(pers);
  console.log('Im a prisoner Page:',props);
  return (
    <div>
      { pers === true?
        (<p>Getting prisoner info...</p>) :
        ( <div className='prisoner-container'>
            <p>{pers.name}</p>
          </div>
        )
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(PrisonerPage)
