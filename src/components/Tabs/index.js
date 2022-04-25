import "./style.scss";
import classnames from "classnames";
import { useCallback } from "react";
import { useTheme } from "../../utils/ThemeContext";

const Tabs = ({ curTab, onChange, tabList }) => {
	const theme = useTheme();

	const onClick = useCallback((tab) => () => onChange(tab.id), [onChange]);

	return (
		<div className={classnames("tabs", { "--dark": theme })}>
			<ul className="tabs__wrap">
				{tabList.map((tab) => {
					return (
						<li
							key={tab.id}
							className={classnames("tabs__wrap__item", {
								"--active": curTab === tab.id,
							})}
							onClick={onClick(tab)}
						>
							{tab.label}
						</li>
					);
				})}

				<li className="tabs__wrap__slider"></li>
			</ul>
		</div>
	);
};

export default Tabs;
