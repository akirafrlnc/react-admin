import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import { User } from "../models/user";
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
import { connect } from "react-redux";
import { setUser } from "../redux/actions/setUserAction";
import { Dispatch } from "redux";

// interface WrapperProps {
// 	children: React.ReactNode; // Define children prop type
// 	setUser: (user: User) => void; // Add setUser function prop
// }

const Wrapper = (props: any) => {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		(
			// const checkUser =
			async () => {
				try {
					// await axios.get('user');
					const { data } = await axios.get('user');

					props.setUser(new User (
						data.id,
						data.first_name,
						data.last_name,
						data.email,
						data.role
					));
				} catch (e) {
					setRedirect(true);
				}
			}
		)();
	}, []);

	// checkUser();
	// }, []); // Empty dependency array to run useEffect only once

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
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
