import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";

const ProductCreate = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [price, setPrice] = useState('');
	const [redirect, setRedirect] = useState(false);

	const submit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await axios.post('/products', {
			title,
			description,
			image,
			price
		});
		setRedirect(true);
	};
	if (redirect) {
		return <Navigate to='/products' />
	}
	return (
		<Wrapper>
			<form onSubmit={submit}>
				<div className='mb-3'>
					<label>Title</label>
					<input className='form-control'
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label>Description</label>
					<input className='form-control'
						onChange={e => setDescription(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label>Image</label>
					<div className="input-group">
						{/* <input type="text" className="form-control" placeholder="Upload" /> */}
					<input className='form-control'
					value={image}
						onChange={e => setImage(e.target.value)}
					/>
					<ImageUpload uploaded={setImage} />
					</div>
				</div>
				<div className='mb-3'>
					<label>Price</label>
					<input className='form-control'
						onChange={e => setPrice(e.target.value)}
					/>
				</div>
				<button className='btn btn-outline-secondary'>Save</button>
			</form>
		</Wrapper>
	);
};

export default ProductCreate;
