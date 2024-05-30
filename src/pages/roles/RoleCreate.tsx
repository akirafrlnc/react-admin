import React, { SyntheticEvent } from 'react';
import Wrapper from '../../components/Wrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Permission } from '../../models/permission';
import { Navigate } from 'react-router-dom';

const RoleCreate = () => {


	const [permissions, setPermissions] = useState([]);
	const [selected, setSelected] = useState([] as number[]);
	const [name, setName] = useState('');
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		(
			async () => {
				const { data } = await axios.get('/permissions');
				console.log(data);  // Check what is being returned here
				setPermissions(data);
			}
		)();
	}, []);

	const check = (id: number) => {
		if (selected.some(s => s === id)) {
			setSelected(selected.filter(s => s !== id));
			return;
		}
		setSelected([...selected, id]);
	}

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.post('/roles', {
			name,
			permissions: selected
		});

		setRedirect(true);
	}
	if (redirect) {
		return <Navigate to='/roles' />
	}

	return (
		<Wrapper>
			<form onSubmit={submit}>
				<div className='mb-3 mt-3 row'>
					<label htmlFor="name" className='col-sm-2 form-label'>Name</label>
					<div className='col-sm-10'>
						<input type="text" className='form-control' onChange={e => setName(e.target.value)} />
					</div>
				</div>
				<div className='mb-3 row'>
					<label htmlFor="permissions" className='col-sm-2 form-label'>Permissions</label>
					<div className='col-sm-10'>

						{permissions.map((p: Permission) => {
							return (
								<div className='form-check form-check-inline col-3' key={p.id}>
									<input type="checkbox" className='form-check-input'
										value={p.id}
										onChange={() => check(p.id)}
									/>
									<label className='form-check-label'>{p.name}</label>
								</div>
							)
						})}
					</div>
				</div>

				<button className='btn btn-outline-secondary'>Save</button>
			</form>
		</Wrapper>
	)
}

export default RoleCreate;
