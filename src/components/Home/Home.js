import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<div className="home-container">
			<div className="home-text">
				Build your next app with{" "}
				<span className="home-text-highlight">speed & elegant design</span>
				<div className="flex flex-center">
					<NavLink className="btn btn-solid-primary" to="/install">
						Get Started <i className="fas fa-arrow-right"></i>
					</NavLink>

					<NavLink className="btn btn-outline-primary" to="/alert">
						Documentation
					</NavLink>
				</div>
			</div>
		</div>
	);
};
