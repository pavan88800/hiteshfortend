import React, { useState, useEffect } from 'react';
import ImageHelper from './helper/ImageHelper';

const Card = ({ produt, addtoCart = true, removeFromCart = false }) => {
	// const cardTitle = produt ? produt.name : 'A Photo From Pixles';
	// const cardDescription = produt ? produt.description : 'DEFAUL';

	// const price = produt ? produt.price : 'DEFAULT';

	const showAddToCart = (addtoCart) => {
		return (
			addtoCart && (
				<button onClick={() => {}} className="btn btn-block btn-outline-success mt-2 mb-2">
					Add to Cart
				</button>
			)
		);
	};
	console.log(produt);
	const showremoveFromCart = (removeFromCart) => {
		return (
			removeFromCart && (
				<button onClick={() => {}} className="btn btn-block btn-outline-danger mt-2 mb-2">
					Remove from cart
				</button>
			)
		);
	};
	return (
		<div className="card text-white bg-dark border border-info ">
			<div className="card-header lead">{produt.description}</div>
			<div className="card-body">
				<ImageHelper produt={produt} />
				<p className="lead bg-success font-weight-normal text-wrap">this {produt.description}</p>
				<p className="btn btn-success rounded  btn-sm px-4">Rs {produt.price}</p>
				<div className="row">
					<div className="col-12">{showAddToCart(addtoCart)}</div>
					<div className="col-12">{showremoveFromCart()}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
