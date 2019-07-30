import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

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
		this.props.login(this.state.username, this.state.password);
	}

	render() {
		const { username, password } = this.state
		const { isLoading, errorMessage } = this.props

		return (
			<form onSubmit={this.submitHandler}>
				{errorMessage && <p className="error">{errorMessage}</p>}

				<input type="text" name="username" placeholder="Username" value={username} onChange={this.changeHandler} /><br />
				<input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} /><br />

				{isLoading
					? <p>Logging in...</p>
					: <button type="submit">Login</button>}
			</form>
		)
	}
}

const mapStateToProps = (state) => ({
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
