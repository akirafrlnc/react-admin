import axios from 'axios';
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom

import React, { SyntheticEvent, useState } from 'react';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.post('login', {
			email,
			password
		});

		setRedirect(true);
	}
	if (redirect) {
		return <Navigate to="/" />; // Use Navigate component to redirect
	}

	return (
		<form onSubmit={submit} className="form-signin">
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

			<input className="form-control" placeholder="Email" required
				onChange={e => setEmail(e.target.value)}
			/>
			<input type="password" className="form-control" placeholder="Password" required
				onChange={e => setPassword(e.target.value)}

			/>


			<button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
		</form>
	);
};

export default Login;
