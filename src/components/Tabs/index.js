import "./style.scss";
import classnames from "classnames";
import { useCallback } from "react";

const Tabs = ({ curTab, onChange, tabList }) => {
	const onClick = useCallback((tab) => () => onChange(tab.id), [onChange]);

	return (
		<div className="tabs">
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
