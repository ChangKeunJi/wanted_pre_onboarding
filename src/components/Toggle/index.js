import "./style.scss";
import { DarkIcon, LightIcon } from "../../assets/icon";
import { useTheme, useThemeUpdate } from "../../utils/ThemeContext";

const Toggle = () => {
	const theme = useTheme();

	// context 상태 업데이트 함수 : 토글 클릭할 때마다 theme 상태 변한다.
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
