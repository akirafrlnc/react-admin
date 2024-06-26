import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { User } from '../models/user';

const Nav = (props: { user: User }) => {

	const logout = async () => {
		console.log("Logout called");
		await axios.post('logout', {});
	}

	return (
		<nav className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
			<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">Company name</a>

			<ul className="navbar-nav flex-row">
				<Link to='/profile' className='p-2 text-white text-decoration-none'>{props.user.name}</Link>
				<Link to='/login' className='p-2 text-white text-decoration-none'
					onClick={logout}
				>Sign out</Link>
			</ul>
		</nav>
	);
}

const mapStateToProps = (state: { user: User }) => {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Nav);
