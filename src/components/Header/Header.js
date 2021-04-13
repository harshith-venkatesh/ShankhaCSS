import React from "react";
import { NavLink } from "react-router-dom";
import { useSideNav } from "../../context/sideNavContext";

export const Header = () => {
	const { setSideNav } = useSideNav();
	return (
		<nav className="header-container">
			<NavLink className="header-logo property-none" to="/">
				<img
					className="header-image"
					src="https://mythologyandvaishbhat.files.wordpress.com/2020/07/shankh.png?w=500"
					alt="Shankha"
				/>
				<div className="header-title">
					<span className="header-title-name">Shankha CSS</span>
					<span className="version-title">v1.0</span>
				</div>
			</NavLink>

			<div className="header-list">
				<button
					className="toggle-button"
					onClick={() => setSideNav((prev) => !prev)}
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
		</nav>
	);
};
