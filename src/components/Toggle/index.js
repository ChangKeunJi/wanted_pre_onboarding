import "./style.scss";
import { DarkIcon, LightIcon } from "../../assets/icon";
import { useTheme, useThemeUpdate } from "../../utils/ThemeContext";

const Toggle = () => {
	const theme = useTheme();
	const onToggleTheme = useThemeUpdate();

	return (
		<>
			<label className="toggle">
				<input type="checkbox" checked={theme} onChange={onToggleTheme} />
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
