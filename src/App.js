import { useState } from "react";

import Toggle from "./components/Toggle";
import Container from "./components/Container";
import "./scss/index.scss";

function App() {
	const [isToggle, setIsToggle] = useState(false);

	return (
		<div className="page">
			<Toggle isToggle={isToggle} onToggle={() => setIsToggle(!isToggle)} />
			<Container />
		</div>
	);
}

export default App;
