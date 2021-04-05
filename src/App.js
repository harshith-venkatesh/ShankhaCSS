import { useState } from "react";
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
	List,
	NavBar,
	Rating,
	SideNav,
	Slider,
	Toast,
	Typography
} from "./components";

import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<div className="main-container">
			<div className="border-1">
				<Header />
			</div>
			<div className="sidenav">
				<SideNav />
			</div>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/avatar" element={<Avatar />} />
					<Route path="/alert" element={<Alert />} />
					<Route path="/badge" element={<Badge />} />
					<Route path="/button" element={<Button />} />
					<Route path="/card" element={<Card />} />
					<Route path="/form" element={<Form />} />
					<Route path="/image" element={<Image />} />
					<Route path="/list" element={<List />} />
					<Route path="/navbar" element={<NavBar />} />
					<Route path="/rating" element={<Rating />} />
					<Route path="/typography" element={<Typography />} />
					<Route path="/toast" element={<Toast />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
