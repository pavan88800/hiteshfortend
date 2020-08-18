import React from 'react';
import { API } from '../../backend';
const ImageHelper = ({ product }) => {
	const imageUrl = product
		? `${API}product/photo/${product._id}`
		: `https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624__340.jpg`;
	return (
		<div className="rounded border border-success p-2">
			<img src={imageUrl} alt="photo" style={{ maxHeight: '100%', maxWidth: '100%' }} className="mb-3 rounded" />
		</div>
	);
};

export default ImageHelper;
