import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";


class PrisonPopulation extends React.Component {

  componentDidMount(props) {
    axios
      .get('https://prison-skills.herokuapp.com/prisoners')
      .then(resolve => {
        console.log(resolve);
        this.setState({friends: resolve.data})
      })
      .catch(err => {console.log('Error:', err)})
  }

  render() {
    return (
      <div>
        prisoners
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonPopulation);
