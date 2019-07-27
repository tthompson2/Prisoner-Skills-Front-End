import React from "react";
import { connect } from 'react-redux';
import { personalInfo } from '../actions'

class PrisonerPage extends React.Component {

  componentDidMount(){
    this.props.personalInfo(this.props.match.params.id)
  }

  render(){
    console.log("this.props:", this.props)
    const pers = this.props.prisoners.find( p => String(p.id) === this.props.match.params.id)
    console.log("im the prisoner:",pers);
    return(
      <div>
        { pers === undefined ?
          (<p>Getting prisoner info...</p>) :
          ( <div className='prisoner-container'>
              <p>{pers.name}</p>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prisoners: state.prisoners
  }
}

const mapDispatchToProps = {
  personalInfo: personalInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonerPage)
