import "./styles.css";
import { Routes, Route, Switch } from "react-router-dom";
import { Header, Home, Footer } from "./components";
import { Documentation } from "./documentation";
export default function App() {
	return (
		<div className="main-container">
			<div className="border-1">
				<Header />
			</div>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/docs/*" element={<Documentation />} />
			</Routes>
			<div>
				<Footer />
			</div>
		</div>
	);
}
