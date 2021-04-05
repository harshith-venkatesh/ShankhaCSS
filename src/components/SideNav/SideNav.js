import React from "react";
import { NavLink } from "react-router-dom";
export const SideNav = ({ setRoute }) => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-links">
				<NavLink
					to="/alert"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Alert
				</NavLink>
				<NavLink
					to="/avatar"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Avatar
				</NavLink>
				<NavLink
					to="/badge"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Badge
				</NavLink>
				<NavLink
					to="/button"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Button
				</NavLink>
				<NavLink
					to="/card"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Card
				</NavLink>
				<NavLink
					to="/form"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Form
				</NavLink>
				<NavLink
					to="/image"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Image
				</NavLink>

				<NavLink
					to="/list"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					List
				</NavLink>

				<NavLink
					to="/navbar"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					NavBar
				</NavLink>
				<NavLink
					to="/rating"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Rating
				</NavLink>
				<NavLink
					to="/typography"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Typography
				</NavLink>
				<NavLink
					to="/toast"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Toast
				</NavLink>
			</div>
		</div>
	);
};
