import React from "react";
import { NavLink } from "react-router-dom";

export const Home = ({ setRoute }) => {
	return (
		<div className="home-container">
			<div className="home-text">
				Build your next app with{" "}
				<span className="home-text-highlight">speed & elegant design</span>
				<div className="flex flex-center">
					<NavLink className="btn btn-solid-primary" to="/alert">
						Get Started <i className="fas fa-arrow-right"></i>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
