import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginPage extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
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
		this.props.login(this.state.username, this.state.password)
		this.props.history.push("/");
	}

	render() {
		const { username, password } = this.state

		return (
			<form onSubmit={this.submitHandler}>
				<h2>Log in</h2>

				<input type="text" name="username" placeholder="Username" value={username} onChange={this.changeHandler} required autocomplete='current-username' /><br />
				<input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} required autocomplete='current-password' /><br />

				{this.props.loggingIn ?
					<p>Logging in...</p> :
					<button type="submit">Login</button>}

			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	loggingIn: state.loggingIn,
})

const mapDispatchToProps = {
	login: login
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(LoginPage)
)
