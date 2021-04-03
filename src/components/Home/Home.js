import React from "react";

export const Home = ({ setRoute }) => {
	return (
		<div className="home-container">
			<div className="home-text">
				Build your next app with{" "}
				<span className="home-text-highlight">speed & elegant design</span>
				<div className="flex flex-center">
					<button
						className="btn btn-solid-primary"
						onClick={() => setRoute("Alert")}
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};
