import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAutheticated } from './index';

const PrivateRoutes = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					isAutheticated() ? (
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

export default PrivateRoutes;
