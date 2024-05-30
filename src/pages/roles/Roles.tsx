import React from 'react';
import Wrapper from '../../components/Wrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Role } from '../../models/role';
import { Link } from 'react-router-dom';
const Roles = () => {

	const [roles, setRoles] = useState([]);

	useEffect(() => {
		(
			async () => {
				const { data } = await axios.get('roles');
				setRoles(data);
			}
		)();
	}, []);

	const del = async (id: number) => {
		if (window.confirm('Are you sure you want to delete this role?')) {
			await axios.delete(`roles/${id}`);
			setRoles(roles.filter((r: Role) => r.id !== id));
		}
	}

	return (
		<Wrapper>
			<div className='pt-3 pb-2 border-bottom mb-3'>
				<Link to={'/roles/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
			</div>
			<div className="table-responsive small">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{roles.map((role: Role) => {
							return (
								<tr key={role.id}>
									<td>{role.id}</td>
									<td>{role.name}</td>
									<td>
										<div className='btn-group mr-2'>
											<Link to={`/roles/${role.id}/edit`} className='btn btn-sm btn-outline-secondary'>Edit</Link>
											<button className='btn btn-sm btn-outline-secondary'
												onClick={() => del(role.id)}
											>Delete</button>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</Wrapper>
	);
};

export default Roles;
