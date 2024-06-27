import React, { Component, SyntheticEvent } from "react";
import "../Login.css";
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom

import axios from 'axios';

class Register extends Component {
	first_name = '';
	last_name = '';
	email = '';
	password = '';
	password_confirm = '';
	state = {
		redirect: false
	};

	submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.post('register',
			{
				first_name: this.first_name,
				last_name: this.last_name,
				email: this.email,
				password: this.password,
				password_confirm: this.password_confirm,
			});

		// Use the navigate function to redirect to /login
		// Set redirect state to true to trigger redirection

		// Update state to trigger redirection
		this.setState({ redirect: true });

	}

	render() {

		if (this.state.redirect) {
			// Use the navigate function to redirect to /login

			return <Navigate to="/login" />; // Use Navigate component to redirect

		}

		return (
			<form onSubmit={this.submit} className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">Please register</h1>
				<input className="form-control" placeholder="First Name" required
					onChange={e => this.first_name = e.target.value}
				/>
				<input className="form-control" placeholder="Last Name" required
					onChange={e => this.last_name = e.target.value}
				/>
				<input className="form-control" placeholder="Email" required
					onChange={e => this.email = e.target.value}
				/>
				<input type="password" className="form-control" placeholder="Password" required
					onChange={e => this.password = e.target.value}
				/>
				<input type="password" className="form-control" placeholder="Password Confirm" required
					onChange={e => this.password_confirm = e.target.value}
				/>

				<button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
			</form>
		);
	}
}

export default Register;
