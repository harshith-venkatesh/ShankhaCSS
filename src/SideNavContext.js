const { createContext, useState, useContext } = require("react");

const SideNavContext = createContext();

export const SideNavProvider = ({ children }) => {
	const [sideNav, setSideNav] = useState(false);
	return (
		<SideNavContext.Provider value={{ sideNav, setSideNav }}>
			{children}
		</SideNavContext.Provider>
	);
};

export const useSideNav = () => useContext(SideNavContext);
