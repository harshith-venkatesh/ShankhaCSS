import React from "react";
import { NavLink } from "react-router-dom";
import { SideNav } from "../SideNav/SideNav";

export const Home = () => {
	return (
		<>
			<div className="hide-SideNav">
				<SideNav />
			</div>
			<div className="home-container">
				<div className="home-text">
					Build your next app with{" "}
					<span className="home-text-highlight">speed & elegant design</span>
					<div className="flex flex-center">
						<NavLink className="btn btn-solid-primary" to="/docs/install">
							Get Started <i className="fas fa-arrow-right"></i>
						</NavLink>

						<NavLink className="btn btn-outline-primary" to="/docs/alert">
							Documentation
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};
