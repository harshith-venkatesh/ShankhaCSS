import React from "react";

export const List = () => {
	return (
		<div>
			<h1>Lists</h1>
			<p>
				Lists can be used at so many places, navigation bar, stacked
				notifications, article pages, etc. The different types of lists are
				listed below
			</p>
			<hr />
			<h4>List with no bullets</h4>
			<div className="list-title">Categories</div>
			<ul className="list-no-bullet">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>List with bullets</h4>
			<div className="list-title">Categories</div>
			<ul className="list-bullet">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Unordered List</h4>
			<div className="list-title">Categories</div>
			<ul className="list-unorder">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Ordered List</h4>
			<div className="list-title">Categories</div>
			<ul className="list-order">
				<li>Home</li>
				<li>Smartphones</li>
				<li>Earphones</li>
				<li>Watches</li>
			</ul>
			<hr />
			<h4>Inline List</h4>
			<div className="list-title">Categories</div>
			<ul className="list-inline">
				<li className="list-inline">Home</li>
				<li className="list-inline">Smartphones</li>
				<li className="list-inline">Earphones</li>
				<li className="list-inline">Watches</li>
			</ul>
		</div>
	);
};
