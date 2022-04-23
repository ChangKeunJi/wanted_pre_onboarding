import { useState } from "react";

import Toggle from "./components/Toggle";
import Layout from "./components/Layout";
import "./scss/index.scss";

function App() {
	const [isToggle, setIsToggle] = useState(false);

	return (
		<div className="page">
			<Toggle isToggle={isToggle} onToggle={() => setIsToggle(!isToggle)} />
			{/* <Layout /> */}
		</div>
	);
}

export default App;
