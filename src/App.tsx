import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	return (

		<div className="App">
			<Router>
				<Routes>
					<Route path={'/'} element={<Dashboard />} />
					<Route path={'/users'} element={<Users />} />
					<Route path={'/register'} element={<Register />} />
					<Route path={'/login'} element={<Login />} />
				</Routes>

			</Router>
		</div>
	);
}

export default App;
