import React from "react";
import { NavLink } from "react-router-dom";

export const Installation = () => {
	return (
		<>
			<h1>Installation</h1>
			<p>
				Copy and paste the code in the head tag of your html document. So that
				you can style your components by just adding class names to your html
				elements. To know about the styled components, their variations, read
				the documentaion
			</p>
			<hr />
			<div className="code-display">
				<pre>
					<code>
						{`
<link rel="stylesheet" href="https://shankhacss.netlify.app/styles.css">
          `}
					</code>
					<br />
				</pre>
			</div>
			<div className="flex flex-center">
				<NavLink className="btn btn-solid-primary" to="/alert">
					Documentation <i className="fas fa-arrow-right"></i>
				</NavLink>
			</div>
		</>
	);
};
