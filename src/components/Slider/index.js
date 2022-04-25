import { useCallback, useState } from "react";
import "./style.scss";
import { useTheme } from "../../utils/ThemeContext";
import { SLIDER_TARGET } from "../../constants/SLIDER_TARGET";
import classnames from "classnames";

const Slider = () => {
	const theme = useTheme();

	const [value, setValue] = useState(0);

	const handleSlider = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const onClickTarget = useCallback((e) => {
		setValue(e.target.dataset.num);
	}, []);

	return (
		<div className={classnames("slider", { "--dark": theme })}>
			<div className="slider__result-box">
				<p>
					{value} <span>%</span>
				</p>
			</div>
			<input
				type="range"
				min={0}
				max={100}
				value={value}
				onChange={handleSlider}
				className="slider__input"
			/>
			<ul className="slider__target">
				{SLIDER_TARGET.map((target, i) => {
					return (
						<li
							key={i}
							onClick={onClickTarget}
							data-num={target}
							className="slider__target__item"
						>
							{target}%
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Slider;
