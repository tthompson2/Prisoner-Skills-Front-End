import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { trial } from '../actions';

class AddPrisoner extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
      prison_id: '',
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
		this.props.trial(this.state.name, this.state.prison_id);
	}

	render() {
		const { name, prison_id } = this.state

		return (
			<form onSubmit={this.submitHandler}>
				<h2>Attempt to convict</h2>

				<input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler} required/><br />
				<input type="text" name="prison_id" placeholder="Prison ID - Integer" value={prison_id} onChange={this.changeHandler} required/><br />

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
	trial: trial
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(AddPrisoner)
)
