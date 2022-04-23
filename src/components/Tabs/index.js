import "./style.scss";
import classnames from "classnames";

const Tabs = ({ curTab, onChange, tabList }) => {
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
							onClick={() => onChange(tab.id)}
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
