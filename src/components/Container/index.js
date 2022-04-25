import { useState } from "react";
import "./style.scss";

import classnames from "classnames";
import Tabs from "../Tabs";
import Slider from "../Slider";
import Input from "../Input";
import { TAB_MENU } from "../../constants/TAB_MENU";
import { useTheme } from "../../utils/ThemeContext";

const Container = () => {
	const [curTab, setCurTab] = useState(0);
	const theme = useTheme();

	return (
		<div className={classnames("container", { "--dark": theme })}>
			<div className="container__tabs">
				<Tabs curTab={curTab} onChange={setCurTab} tabList={TAB_MENU} />
			</div>
			<div className="container__display">
				{curTab === 0 && <Slider />}
				{curTab === 1 && <Input />}
			</div>
		</div>
	);
};

export default Container;
