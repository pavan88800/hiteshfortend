import React, { useState, useEffect } from 'react';
import Base from './Base';
import Card from './Card';
import { getAllProducts } from './helper/coreapicalls';

const Home = () => {
	const [product, setProducts] = useState([]);
	const [error, seterror] = useState([]);

	const loadAllProdut = () => {
		getAllProducts().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		loadAllProdut();
	}, []);
	// console.log('API IS', process.env.REACT_APP_BACKEND);
	return (
		<Base title="Home Page" description="Welcome to the T-Shirt Store">
			<div className="row text-center">
				<h1 className="text-whie">All Of tshits</h1>
				<div className="row">
					{product.map((produt, index) => (
						<div key={index} className="col-4 mb-4">
							<Card produt={produt} />
						</div>
					))}
				</div>
			</div>
		</Base>
	);
};

export default Home;
