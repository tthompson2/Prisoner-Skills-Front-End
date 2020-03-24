import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { personalInfo } from '../actions'
import { freetheprisoner } from '../actions'

class PrisonerPage extends React.Component {

  componentDidMount() {
    this.props.personalInfo(this.props.match.params.id)
  }

  submitHandler = (evt) => {
    evt.preventDefault();
    // this.props.freetheprisoner(this.props.match.params.id);
    console.log('server doesnt allow us to delete :(');
    // this.props.history.push("/");
  }

  render() {
    const pers = this.props.prisoners.find(p => String(p.id) === this.props.match.params.id)
    return (
      <div>
        <nav className="prison-nav">
          <Link exact to={`/prisoner/${this.props.match.params.id}/edit`} >Edit</Link>
          <button type="button" onClick={this.submitHandler}>Free the prisoner</button>
        </nav>

        <h2>Prisoner Details</h2>

        {pers === undefined ?
          (<p>Getting prisoner info...</p>) :
          (<div>
            <p>name: {pers.name}</p>
            <span>Skills: {pers === undefined
              ? (<p>Getting prisoner skills...</p>)
              : (pers.skills === undefined || pers.skills[0] === undefined
                ? <span>no skills to display</span>
                : pers.skills.map(skill => {
                  return (
                    <span key={skill.id}>{`${skill.name} `}</span>
                  )
                })
              )
            }</span>
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
  personalInfo: personalInfo,
  freetheprisoner: freetheprisoner
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonerPage)
