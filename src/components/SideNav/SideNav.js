import React from "react";
import { NavLink } from "react-router-dom";
export const SideNav = () => {
	return (
		<>
			<div
				className="sidebarMenu"
				onClick={() => {
					document
						.getElementsByClassName("sidebarMenu")[0]
						.classList.toggle("active");
				}}
			>
				<NavLink
					to="/docs/install"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Installation
				</NavLink>
				<NavLink
					to="/docs/alert"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Alert
				</NavLink>
				<NavLink
					to="/docs/avatar"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Avatar
				</NavLink>
				<NavLink
					to="/docs/badge"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Badge
				</NavLink>
				<NavLink
					to="/docs/button"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Button
				</NavLink>
				<NavLink
					to="/docs/card"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Card
				</NavLink>
				<NavLink
					to="/docs/form"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Form
				</NavLink>
				<NavLink
					to="/docs/image"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Image
				</NavLink>

				<NavLink
					to="/docs/list"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					List
				</NavLink>

				<NavLink
					to="/docs/navbar"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					NavBar
				</NavLink>
				<NavLink
					to="/docs/rating"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Rating
				</NavLink>
				<NavLink
					to="/docs/typography"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Typography
				</NavLink>
				<NavLink
					to="/docs/toast"
					className="nav-btn"
					activeClassName="nav-btn selected"
				>
					Toast
				</NavLink>
			</div>
		</>
	);
};
