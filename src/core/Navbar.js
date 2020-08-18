import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { singout, isAutheticated } from '../auth/helper';
const Active = (history, path) => {
	if (history.location.pathname === path) {
		return { color: '#2ecc72' };
	} else {
		return { color: '#fff' };
	}
};

const Navbar = ({ history }) => {
	return (
		<div>
			<ul className="nav nav-tabs bg-dark ">
				<li className="nav-item">
					<Link style={Active(history, '/')} className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link style={Active(history, '/cart')} className="nav-link" to="/cart">
						Cart
					</Link>
				</li>
				{isAutheticated() && isAutheticated().user.role === 0 && (
					<li className="nav-item">
						<Link style={Active(history, '/user/dashboard')} className="nav-link" to="/user/dashboard">
							U.Dashboard
						</Link>
					</li>
				)}
				{isAutheticated() && isAutheticated().user.role === 1 && (
					<Fragment>
						<li className="nav-item">
							<Link style={Active(history, '/admin/dashboard')} className="nav-link" to="/admin/dashboard">
								A. Dashboard
							</Link>
						</li>
						<li className="nav-item">
							<Link style={Active(history, '/user/dashboard')} className="nav-link" to="/user/dashboard">
								U.Dashboard
							</Link>
						</li>
					</Fragment>
				)}
				{!isAutheticated() && (
					<Fragment>
						<li className="nav-item">
							<Link style={Active(history, '/signIn')} className="nav-link" to="/signIn">
								SignIn
							</Link>
						</li>

						<li className="nav-item">
							<Link style={Active(history, '/signUp')} className="nav-link" to="/signUp">
								Sign Up
							</Link>
						</li>
					</Fragment>
				)}
				{isAutheticated() && (
					<li className="nav-item">
						<span
							className="nav-link text-warning"
							onClick={() => {
								singout(() => {
									history.push('/');
								});
							}}
						>
							singout
						</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default withRouter(Navbar);
