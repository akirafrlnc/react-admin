import axios from 'axios';
import { User } from '../../models/user';
import React, { useEffect, useState } from 'react';
import Wrapper from "../../components/Wrapper";
import { Link } from 'react-router-dom';
const Users = () => {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(0);

	useEffect(() => {
		(
			async () => {
				const { data } = await axios.get(`users?page=${page}`);

				// console.log(data.data);
				setUsers(data.data);
				setLastPage(data.meta.last_page);
			}
		)()
	}, [page]);

	const next = () => {
		if (page < lastPage) {

			setPage(page + 1);
		}
	}

	const prev = () => {
		if (page >= 1) {

			setPage(page - 1);
		}
	}
	const del = async (id: number) => {
		if (window.confirm('Are you sure you want to delete this record?')) {
			try {
				await axios.delete(`users/${id}`);
				setUsers(users.filter((u: User) => u.id !== id));
			} catch (error) {
				console.error("Error deleting user:", error);
				alert("Failed to delete user");
			}
		}
	}

	return (
		<Wrapper>
			<div className='pt-3 pb-2 border-bottom mb-3'>
				<Link to={'/users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
			</div>
			<div className="table-responsive small">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Role</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user: User) => {
							return (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.first_name} {user.last_name}</td>
									<td>{user.email}</td>
									<td>{user.role.name}</td>
									<td>
										<div className='btn-group mr-2'>
											<Link to={`/users/${user.id}/edit`} className='btn btn-sm btn-outline-secondary'>Edit</Link>
											<button className='btn btn-sm btn-outline-secondary'
												onClick={() => del(user.id)}
											>Delete</button>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<nav>
				<ul>
					<li><button className='page-link' onClick={prev}>Previous</button></li>
					<li><button className='page-link' onClick={next}>Next</button></li>
				</ul>
			</nav>

		</Wrapper>
	);

}

export default Users;
