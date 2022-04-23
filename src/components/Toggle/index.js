import "./style.scss";
import { DarkIcon, LightIcon } from "../../assets/icon";

const Toggle = ({ rounded = true, isToggle, onToggle }) => {
	console.log(isToggle);
	return (
		<>
			<label className="toggle">
				<input type="checkbox" checked={isToggle} onChange={onToggle} />
				<span className="toggle-slider">
					<img
						className="toggle-icon toggle-slider__dark"
						src={DarkIcon}
						alt="darkicon"
					/>
					<img
						className="toggle-icon toggle-slider__light"
						src={LightIcon}
						alt="lighticon"
					/>
				</span>
			</label>
		</>
	);
};

export default Toggle;
