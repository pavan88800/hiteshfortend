import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { getCategory, CraeteProdct } from '../admin/helper/adminapicall';
import { isAutheticated } from '../auth/helper/index';
const AddProduct = ({ history }) => {
	const { user, token } = isAutheticated();
	const [values, setvalues] = useState({
		name: '',
		description: '',
		stock: '',
		price: '',
		photo: '',
		categories: [],
		categroy: '',
		loading: false,
		error: '',
		createdProduct: '',
		didRedirect: false,
		formData: '',
	});
	const {
		name,
		description,
		stock,
		price,
		photo,
		categories,
		categroy,
		loading,
		error,
		createdProduct,
		didRedirect,
		formData,
	} = values;

	const Preload = () => {
		getCategory().then((data) => {
			if (data.errors) {
				setvalues({ ...values, error: error.data });
			} else {
				setvalues({ ...values, categories: data, formData: new FormData() });
				console.log(categories);
			}
		});
	};
	useEffect(() => {
		Preload();
	}, []);

	const handleChange = (name) => (e) => {
		const value = name === 'photo' ? e.target.files[0] : e.target.value;
		formData.set(name, value);

		setvalues({ ...values, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setvalues({ ...values, error: '', loading: true });
		CraeteProdct(user._id, token, formData)
			.then((data) => {
				if (data.error) {
					console.log(data);
					setvalues({ ...values, error: data.error });
				} else {
					setvalues({
						...values,
						name: '',
						description: '',
						price: '',
						photo: '',
						stock: '',
						categroy: '',
						createdProduct: data.name,
						loading: false,
					});
					setTimeout(() => {
						history.push('/admin/dashboard');
					}, 2000);
				}
			})
			.catch((err) => console.error(err));
	};

	const successMessage = () => {
		return (
			<div className="alert alert-info mt-3" style={{ display: createdProduct ? '' : 'none' }}>
				<h4>{createdProduct} Created successFully</h4>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="alert alert-danger mt-4" style={{ display: error ? '' : 'none' }}>
				<h4>{error}</h4>
			</div>
		);
	};

	const createProductForm = () => (
		<form>
			<span>Post photo</span>
			<div className="form-group">
				<label className="btn btn-block btn-success">
					<input onChange={handleChange('photo')} type="file" name="photo" accept="image" placeholder="choose a file" />
				</label>
			</div>
			<div className="form-group">
				<input onChange={handleChange('name')} name="photo" className="form-control" placeholder="Name" value={name} />
			</div>
			<div className="form-group">
				<textarea
					onChange={handleChange('description')}
					name="photo"
					className="form-control"
					placeholder="Description"
					value={description}
				/>
			</div>
			<div className="form-group">
				<input
					onChange={handleChange('price')}
					type="number"
					className="form-control"
					placeholder="Price"
					value={price}
				/>
			</div>
			<div className="form-group">
				<select onChange={handleChange('categroy')} className="form-control" placeholder="Category">
					<option>Select</option>
					{categories &&
						categories.map((cate, index) => (
							<option key={index} value={cate._id}>
								{cate.name}
							</option>
						))}
				</select>
			</div>
			<div className="form-group">
				<input
					onChange={handleChange('stock')}
					type="number"
					className="form-control"
					placeholder="Quantity"
					value={stock}
				/>
			</div>

			<button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-4">
				Create Product
			</button>
		</form>
	);

	return (
		<Base title="Add a Product here! " description="Welcome to Creation Section " className="container bg-info p-4">
			<Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
				Admin Home
			</Link>

			<div className="row bg-dark text-white rounded">
				<div className="col-md-8 offset-md-2">
					{successMessage()}
					{errorMessage()}
					{createProductForm()}
				</div>
			</div>
		</Base>
	);
};

export default withRouter(AddProduct);
