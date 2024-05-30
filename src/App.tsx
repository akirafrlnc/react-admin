import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';

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
					<Route path={'/users/:id/edit'} element={<UserEdit />} />
					<Route path={'/roles'} element={<Roles />} />
					<Route path={'/roles/create'} element={<RoleCreate />} />
					<Route path={'/roles/:id/edit'} element={<RoleEdit />} />
				</Routes>

			</Router>
		</div>
	);
}

export default App;
