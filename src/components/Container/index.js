import { useState } from "react";
import "./style.scss";

import Tabs from "../Tabs";
import Slider from "../Slider";
import { TAB_MENU } from "../../constants/TAB_MENU";
import { useTheme } from "../../utils/ThemeContext";

const Container = () => {
	const [curTab, setCurTab] = useState(0);

	return (
		<div className="container">
			<div className="container__tabs">
				<Tabs curTab={curTab} onChange={setCurTab} tabList={TAB_MENU} />
			</div>
			<div className="container__display">{curTab === 0 && <Slider />}</div>
		</div>
	);
};

export default Container;
