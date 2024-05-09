import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

const Nav = () => {
	const [user, setUser] = useState(
		new User()
	);
	useEffect(() => {
		(async () => {
			const { data } = await axios.get('user');
			setUser(new User(
				data.id,
				data.first_name,
				data.last_name,
				data.email,
				data.role,
			));
		})();
	}, []);
// console.log(User);
	// const logout = async () => {
	// 	await axios.post('logout', {});
	// }
	const logout = async () => {
		console.log("Logout called");
		await axios.post('logout', {});
	}

	return (
		<nav className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
			<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">Company name</a>

			<ul className="navbar-nav flex-row">
				<Link to='/profile' className='p-2 text-white text-decoration-none'>{user.name}</Link>
				<Link to='/login' className='p-2 text-white text-decoration-none'
					onClick={logout}
				>Sign out</Link>
			</ul>
		</nav>
	);
}


export default Nav;
