import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import UserCreate from './pages/users/UserCreate';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	return (

		<div className="App">
			<Router>
				<Routes>
					<Route path={'/'} element={<Dashboard />} />
					<Route path={'/register'} element={<Register />} />
					<Route path={'/login'} element={<Login />} />
					<Route path={'/users'} element={<Users />} />
					<Route path={'/users/create'} element={<UserCreate />} />
				</Routes>

			</Router>
		</div>
	);
}

export default App;
