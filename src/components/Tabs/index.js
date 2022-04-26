import "./style.scss";
import classnames from "classnames";
import { useCallback } from "react";
import { useTheme } from "../../utils/ThemeContext";

const Tabs = ({ curTab, onChange, tabList }) => {
	const theme = useTheme();

	// 다른 탭을 클릭할 때마다 현재 탭의 상태 업데이트.
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
