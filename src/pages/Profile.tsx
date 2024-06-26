import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { User } from "../models/user";
import { connect } from "react-redux";
import { SyntheticEvent } from "react";
import { Dispatch } from "redux";
import { setUser } from "../redux/actions/setUserAction";

const Profile = (props: { user: User, setUser: (user: User) => void }) => {
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirm, setPasswordConfirm] = useState('');


	useEffect(() => {
		setFirstName(props.user.first_name);
		setLastName(props.user.last_name);
		setEmail(props.user.email);
	}, [props.user]);

	const infoSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		const {data} = await axios.put('http://localhost:8000/api/users/info', {
			first_name,
			last_name,
			email
		});

		props.setUser(new User(
			props.user.id,
			props.user.first_name,
			props.user.last_name,
			props.user.email,
			props.user.role
		));
	}

	const passwordSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.put('http://localhost:8000/api/users/password', {
			password,
			password_confirm
		});
	}



	return (
		<Wrapper>
			<h3>Account Information</h3>
			<form onSubmit={infoSubmit}>
				<div className="mb-3">
					<label>First Name</label>
					<input className="form-control"
						defaultValue={first_name}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label>Last Name</label>
					<input className="form-control"
						defaultValue={last_name}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label>Email</label>
					<input className="form-control"
						defaultValue={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-secondary">Save</button>
			</form>
			<h3>Change Password</h3>
			<form onSubmit={passwordSubmit}>
				<div className="mb-3">
					<label>Password</label>
					<input type="password" className="form-control"
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label>Password Confirm</label>
					<input type="password" className="form-control"
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-secondary">Save</button>
			</form>
		</Wrapper>
	);
};
const mapStateToProps = (state: { user: User }) => {
	return {
		user: state.user
	};
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
	return {
		setUser: (user: User) => dispatch(setUser(user))
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
