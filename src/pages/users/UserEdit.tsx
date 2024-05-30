import React, { useState, useEffect } from 'react';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';
import { Role } from "../../models/role";
import { Navigate, useParams } from 'react-router-dom'; // Change this line

// Define the Role type if not already defined
// type Role = {
//   id: string;
//   name: string;
// };
const UserEdit = () => {
	const { id } = useParams();
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [role_id, setRoleId] = useState('');
	const [roles, setRoles] = useState([]);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
    (async () => {
        try {
            const rolesResponse = await axios.get('roles');
            setRoles(rolesResponse.data);
            console.log('Roles:', rolesResponse.data); // Log roles data

            const { data } = await axios.get(`users/${id}`);
            console.log('User data:', data); // Log user data

            setFirstName(data.first_name);
            setLastName(data.last_name);
            setEmail(data.email);
            setRoleId(data.role_id);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    })();
}, [id]);

	const submit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await axios.put(`users/${id}`, {
			first_name,
			last_name,
			email,
			role_id
		});
		setRedirect(true);
	}

	if (redirect) {
		return <Navigate to="/users" /> // Change this line
	}

	return (
		<Wrapper>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label>First Name</label>
					<input type="text" className="form-control"
						value={first_name}
						onChange={e => setFirstName(e.target.value)} />
				</div>
				<div className="mb-3">
					<label>Last Name</label>
					<input type="text" className="form-control"
						value={last_name}
						onChange={e => setLastName(e.target.value)} />
				</div>
				<div className="mb-3">
					<label>Email</label>
					<input type="text" className="form-control"
						value={email}
						onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="mb-3">
					<label>Role</label>
					<select className="form-control"
						onChange={e => setRoleId(e.target.value)}
						value={role_id}>
						{roles.map((r: Role) => {
							return (
								<option key={r.id} value={r.id}>{r.name}</option>
							)
						})}
					</select>
				</div>
				<button className="btn btn-outline-secondary">Save</button>
			</form>
		</Wrapper>
	);
};

export default UserEdit;
