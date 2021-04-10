import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { SideNavProvider } from "../src/context/sideNavContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<Router>
			<SideNavProvider>
				<App />
			</SideNavProvider>
		</Router>
	</StrictMode>,
	rootElement
);
