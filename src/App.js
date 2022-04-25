import { useCallback, useState } from "react";

import Toggle from "./components/Toggle";
import Container from "./components/Container";
import { ThemeProvider } from "./utils/ThemeContext";
import "./scss/index.scss";

function App() {
	return (
		<div className="page">
			<ThemeProvider>
				<Toggle />
				<Container />
			</ThemeProvider>
		</div>
	);
}

export default App;
