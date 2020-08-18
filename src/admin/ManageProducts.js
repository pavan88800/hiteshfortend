import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper';
import { getProduct, deleteProduct } from '../admin/helper/adminapicall';
const ManageProducts = () => {
	const [products, setProducts] = useState([]);

	const { user, token } = isAutheticated();

	const perload = () => {
		getProduct().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		perload();
	}, []);

	const deleteMyProduct = (productId) => {
		deleteProduct(productId, user._id, token)
			.then((data) => {
				console.log(data);
				if (data.error) {
					console.log('something went worng');
				} else {
					perload();
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Base title="Welcome admin" description="Manage products here">
			<h2 className="mb-4">All products:</h2>
			<Link className="btn btn-info" to={`/admin/dashboard`}>
				<span className="">Admin Home</span>
			</Link>
			<div className="row">
				<div className="col-12">
					<h2 className="text-center text-white my-3">{products.length}</h2>
					{products.map((prod, index) => (
						<div key={index} className="row text-center mb-2 ">
							<div className="col-4">
								<h3 className="text-white text-left">{prod.name}</h3>
							</div>
							<div className="col-4">
								<Link className="btn btn-success" to={`/admin/product/update/${prod._id}`}>
									<span className="">Update</span>
								</Link>
							</div>
							<div className="col-4">
								<button onClick={() => deleteMyProduct(prod._id)} className="btn btn-danger">
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</Base>
	);
};

export default ManageProducts;
