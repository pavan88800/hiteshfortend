const { API } = require('../../backend');

// Create Categoerty
export const Createcateorty = (userId, token, category) => {
	return fetch(`${API}category/create/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// get All categories

export const getCategory = () => {
	return fetch(`${API}allcategory`, {
		method: 'GET',
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// get single categorty

export const getSingleCategorty = (catgeoryId) => {
	return fetch(`${API}category/${catgeoryId}`, {
		method: 'GET',
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

//Delete Categorty

export const DeleteCateorty = (categoryId, userId, token) => {
	return fetch(`${API}category/${categoryId}/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// products call Create Product
export const CraeteProdct = (userId, token, product) => {
	return fetch(`${API}product/create/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.error(err));
};

export const updateCategory = (catgeoryId, userId, token, name) => {
	return fetch(`${API}category/${catgeoryId}/${userId}/`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(name),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
// single categoery

// get All Prodct

export const getProduct = () => {
	return fetch(`${API}product`, {
		method: 'GET',
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// delete Product
export const deleteProduct = (productId, userId, token) => {
	return fetch(`${API}product/${productId}/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// Get Single Product
export const getSingleProduct = (productId) => {
	return fetch(`${API}product/${productId}`, {
		method: 'GET',
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// Update Product/product/:productId/:userId'
export const updateproduct = (productId, userId, token, product) => {
	return fetch(`${API}product/${productId}/${userId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
