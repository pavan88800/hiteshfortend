import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAutheticated } from './index';

const AdminRoutes = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					isAutheticated() && isAutheticated().user.role === 1 ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: '/signin',
								state: { from: props.location },
							}}
						/>
					)
				}
			/>
		</div>
	);
};

export default AdminRoutes;
