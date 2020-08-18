const { API } = require('../../backend');

export const getAllProducts = () => {
	return fetch(`${API}product`, {
		method: 'GET',
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
