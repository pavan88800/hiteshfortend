import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { singup } from '../auth/helper';
// import { API } from '../backend';
const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		success: false,
	});
	const { name, email, password, error, success } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, error: false, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();

		setFormData({ ...formData, error: false });
		singup({
			name,
			email,
			password,
		})
			.then((data) => {
				if (data.errors) {
					console.log(data);
					setFormData({ ...formData, error: data.errors, success: false });
				} else {
					setFormData({
						...formData,
						name: '',
						email: '',
						password: '',
						error: '',
						success: true,
					});
				}
			})
			.catch((err) => {
				console.error(err);
				console.log('Erorr in singup');
			});
	};
	console.log(error);
	const singUpForm = () => {
		return (
			<div className="row " style={{ marginTop: '120px' }}>
				<div className="col-md-6 offset-sm-3 text-left" style={{ marginTop: '-90px' }}>
					<form onSubmit={onSubmit}>
						<div className="from-group">
							<label className="text-light">Name</label>
							<input className="form-control" type="text" name="name" value={name} onChange={onChange} />
						</div>

						<div className="from-group">
							<label className="text-light">Email</label>
							<input className="form-control" type="email" name="email" value={email} onChange={onChange} />
						</div>
						<div className="from-group">
							<label className="text-light">Password</label>
							<input className="form-control" type="password" name="password" value={password} onChange={onChange} />
						</div>
						<button className="btn btn-success btn-block mt-2">Submit</button>
					</form>
				</div>
			</div>
		);
	};

	const successMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
						New account was created successfully. Please <Link to="/signin">Login Here</Link>
					</div>
				</div>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
						{error}
					</div>
				</div>
			</div>
		);
	};
	return (
		<Base title="Sign Up Page" description="A Page for user to Sign Up">
			{successMessage()}
			{errorMessage()}
			{singUpForm()}
		</Base>
	);
};

export default Signup;
