import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	Alert,
	Avatar,
	Badge,
	Button,
	Card,
	Footer,
	Form,
	Header,
	Home,
	Image,
	Installation,
	List,
	NavBar,
	Rating,
	SideNav,
	Slider,
	Toast,
	Typography
} from "./components";
export const Documentation = () => {
	return (
		<>
			<div className="container">
				<div className="sidenav-container">
					<SideNav />
				</div>
				<div className="component-container">
					<Routes>
						<Route path="/avatar" element={<Avatar />} />
						<Route path="/alert" element={<Alert />} />
						<Route path="/badge" element={<Badge />} />
						<Route path="/button" element={<Button />} />
						<Route path="/card" element={<Card />} />
						<Route path="/form" element={<Form />} />
						<Route path="/image" element={<Image />} />

						<Route path="/install" element={<Installation />} />
						<Route path="/list" element={<List />} />
						<Route path="/navbar" element={<NavBar />} />
						<Route path="/rating" element={<Rating />} />
						<Route path="/typography" element={<Typography />} />
						<Route path="/toast" element={<Toast />} />
					</Routes>
				</div>
			</div>
		</>
	);
};
