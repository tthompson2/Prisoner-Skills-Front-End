import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { update } from '../actions';

class EditPrisoner extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			prison_id: '',
			canHaveWorkLeave: false,
		}
	}

	componentDidMount() {
		const pers = this.props.prisoners.find(p => String(p.id) === this.props.match.params.id)
		this.setState({
			name: pers.name,
			prison_id: pers.prison_id,
			canHaveWorkLeave: pers.canHaveWorkLeave,
		})
	}

	changeHandler = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	submitHandler = (evt) => {
		evt.preventDefault();
		this.props.update(this.state.name, this.state.prison_id, this.state.canHaveWorkLeave, this.props.match.params.id);
		this.props.history.push("/");
	}

	render() {
		const { name, prison_id, canHaveWorkLeave } = this.state

		return (
			<form onSubmit={this.submitHandler}>
				<h2>Edit your prisoner's information</h2>

				<input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler} /><br />
				<input type="text" name="prisonID" placeholder="Prison ID" value={prison_id} onChange={this.changeHandler} /><br />
				<select name="canHaveWorkLeave" value={canHaveWorkLeave} onChange={this.changeHandler}>
					<option value='true'>True</option>
					<option defaultValue value='false'>False</option>
				</select>

				{this.props.addingPrisoner ?
					<p>Updating prisoner info...</p> :
					<button type="submit">Save Changes</button>}

			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	prisoners: state.prisoners
})

const mapDispatchToProps = {
	update: update
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(EditPrisoner)
)
