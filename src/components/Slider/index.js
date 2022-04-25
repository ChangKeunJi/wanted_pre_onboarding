import { useCallback, useState } from "react";
import "./style.scss";

const Slider = () => {
	const [value, setValue] = useState(0);

	const handleSlider = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return (
		<div>
			<h1>slider</h1>
			<p>{value}</p>
			<input type="range" value={value} onChange={handleSlider} />
		</div>
	);
};

export default Slider;
