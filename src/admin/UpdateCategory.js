import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';
import { updateCategory, getSingleCategorty } from '../admin/helper/adminapicall';
const UpdateCategory = ({ match, history }) => {
	const [name, setName] = useState('');
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const { user, token } = isAutheticated();

	const goBack = () => (
		<div className="mt-5">
			<Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
				Back To Admin Home
			</Link>
		</div>
	);

	const Preload = (catgeoryId) => {
		getSingleCategorty(catgeoryId).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setName(data.name);
			}
		});
	};
	useEffect(() => {
		Preload(match.params.categoryId);
	}, []);
	const onChange = (e) => {
		setError('');
		setName(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (name === '') {
			alert('Please Fill the Filed ');
		} else {
			setError('');
			setSuccess(false);
			// backend fired
			updateCategory(match.params.categoryId, user._id, token, { name })
				.then((data) => {
					if (data.error) {
						console.log(data.error);
						setError({ error: data.error });
					} else {
						setError('');
						setSuccess(true);
						setName('');
						RedirectIfOk();
					}
				})
				.catch((err) => console.error(err));

			setTimeout(() => {
				setSuccess('');
				setError('');
			}, 3000);
		}
	};

	const RedirectIfOk = () => {
		setTimeout(() => {
			history.push('/admin/dashboard');
		}, 2500);
	};

	const successMessage = () => {
		if (success) {
			return <h4 className="text-success text-center">Category Updated SucessFully</h4>;
		}
	};
	const waringMessage = () => {
		if (error) {
			return <h4 className="text-success ">{error.error} </h4>;
		}
	};
	const myCategoryForm = () => {
		return (
			<form>
				<div className="form-group">
					<p className="lead">Enter the Category</p>
					<input
						required
						type="text"
						className="form-control my-3"
						onChange={onChange}
						value={name}
						autoFocus
						placeholder="For Example Summer"
					/>
					<button onClick={onSubmit} className="btn btn-outline-info ">
						Update Category
					</button>
				</div>
			</form>
		);
	};

	return (
		<Base title="Craete Category " description="Add New tshirts" className="container bg-info p-4">
			<div className="row bg-white rounded">
				<div className="col-md-8 offset-2">
					{successMessage()}
					{waringMessage()}
					{myCategoryForm()}
					{goBack()}
				</div>
			</div>
		</Base>
	);
};

export default UpdateCategory;
