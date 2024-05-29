import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom

interface WrapperProps {
	children: React.ReactNode; // Define children prop type
}

const Wrapper = (props: WrapperProps) => {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const checkUser = async () => {
			try {
				await axios.get('user');
				console.log('User is logged in');
			} catch (e) {
				setRedirect(true);
			}
		};

		checkUser();
	}, []); // Empty dependency array to run useEffect only once

	if (redirect) {
		return <Navigate to="/login" />; // Use Navigate to redirect if there's an error
	}

	return (
		<>
			<Nav />
			<div className="container-fluid">
				<div className="row">
					<Menu />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						{props.children}
						{/* // Use props to access children */}
					</main>
				</div>
			</div>
		</>
	);
};

export default Wrapper;
