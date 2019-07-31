import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions';

class AddPrisoner extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
      prisonID: '',
		}
	}

	changeHandler = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	submitHandler = (evt) => {
		evt.preventDefault();
		this.props.signup(this.state.username, this.state.address, this.state.name, this.state.password, this.state.address);
	}

	render() {
		const { name, prisonID } = this.state

		return (
			<form onSubmit={this.submitHandler}>

				<input type="text" name="name" placeholder="name" value={name} onChange={this.changeHandler} /><br />
				<input type="text" name="Prison ID" placeholder="Prison ID" value={prisonID} onChange={this.changeHandler} /><br />

				{this.props.addingPrisoner ?
					<p>Listening to case...</p> :
					<button type="submit">Start Court Hearing</button>}

			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	addingPrisoner: state.addingPrisoner
})

const mapDispatchToProps = {
	signup: signup
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(AddPrisoner)
)
