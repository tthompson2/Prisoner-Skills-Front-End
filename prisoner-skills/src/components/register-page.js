import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions';

class RegisterPage extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			address: '',
			name: '',
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
		this.props.history.push("/");
	}

	render() {
		const { username, password, name, address } = this.state

		return (
			<form onSubmit={this.submitHandler}>

				<input type="text" name="username" placeholder="Username" value={username} onChange={this.changeHandler} /><br />
				<input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} /><br />
				<input type="text" name="name" placeholder="name" value={name} onChange={this.changeHandler} /><br />
				<input type="text" name="address" placeholder="address" value={address} onChange={this.changeHandler} /><br />

				{this.props.loggingIn ?
					<p>Logging in...</p> :
					<button type="submit">Sign Up</button>}

			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	loggingIn: state.loggingIn
})

const mapDispatchToProps = {
	signup: signup
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(RegisterPage)
)
