import React from 'react';
import Navbar from '../core/Navbar';
const Base = ({
	title = 'my title',
	description = 'my description',
	className = 'bg-dark text-white p-4',
	children,
}) => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="jumbotron bg-dark text-white text-center">
					<h2 className="display-4">{title}</h2>
					<p className="lead">{description}</p>
				</div>
				<div className={className}>{children}</div>
			</div>
			{/* <footer className="footer bg-dark mt-auto ">
				<div className="container-fulid bg-success text-white text-center  ">
					<h4>if you got any question fell free to Reach out !</h4>
					<button className="btn btn-warning btn-lg ">Contact Us</button>
				</div>
				<div className="container">
					<span className="text-muted">
						An Amazing place to<span className="text-white"> buy tshrit</span>
					</span>
				</div>
			</footer> */}
		</div>
	);
};

export default Base;
