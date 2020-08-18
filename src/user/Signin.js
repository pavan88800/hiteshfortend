import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import { singin, authenticate, isAutheticated } from '../auth/helper/index';

const Signin = () => {
	const [formData, setFormData] = useState({
		email: 'bard123@gmail.com',
		password: '123123',
		error: '',
		loading: false,
		didRedirect: false,
	});
	const { email, password, error, loading, didRedirect } = formData;

	const { user } = isAutheticated();
	const onChange = (e) => {
		setFormData({ ...formData, error: false, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setFormData({ ...formData, error: false, loading: true });
		singin({
			email,
			password,
		})
			.then((data) => {
				if (data.errors) {
					console.log(data);
					setFormData({ ...formData, error: data.errors, loading: false });
				} else {
					authenticate(data, () => {
						setFormData({
							...formData,
							email: '',
							password: '',
							error: '',
							loading: false,
							didRedirect: true,
						});
					});
				}
			})
			.catch((err) => {
				console.error(err);
				console.log('Singin is faild');
			});
	};
	const singInForm = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left" style={{ marginTop: '20px' }}>
					<form onSubmit={onSubmit}>
						<div className="from-group">
							<label className="text-light">Email</label>
							<input className="form-control" type="email" name="email" value={email} onChange={onChange} />
						</div>
						<div className="from-group">
							<label className="text-light">password</label>
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
			loading && (
				<di v className="alert alert-info">
					<h1>Loading...</h1>
				</di>
			)
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

	const performRedriect = () => {
		if (didRedirect) {
			if (user && user.role === 1) {
				return <Redirect to="/admin/dashboard" />;
			} else {
				return <Redirect to="user/dashboard" />;
			}
		}

		if (isAutheticated()) {
			return <Redirect to="/" />;
		}
	};
	return (
		<Base title="Sign In Page" description="A Page for user to Sign In !">
			{successMessage()}
			{errorMessage()}
			{singInForm()}
			{performRedriect()}
		</Base>
	);
};

export default Signin;
