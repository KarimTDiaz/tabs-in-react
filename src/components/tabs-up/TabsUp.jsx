import { useState } from 'react';
import style from './tabs-up.module.scss';
import { v4 } from 'uuid';
import { Container, List, Tab } from './styles';
const tabsInfo = ['info 1', 'info 2', 'info 3'];
const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

const TabsUp = () => {
	const [tab, setTab] = useState(0);
	return (
		<>
			<div className={style.container}>
				<ul className={style['tabs-container']}>
					{tabs.map((element, index) => (
						<div
							onClick={() => setTab(index)}
							key={v4()}
							className={
								index !== tab ? style.tab : `${style.tab} ${style.blue}`
							}
						>
							{tabs[index]}
						</div>
					))}
				</ul>
				<p>{tabsInfo[tab]}</p>
			</div>

			<Container className={style.container}>
				<List className={style['tabs-container']}>
					{tabs.map((element, index) => (
						<Tab
							onClick={() => setTab(index)}
							key={v4()}
							isActive={index === tab}
						>
							{tabs[index]}
						</Tab>
					))}
				</List>
				<p>{tabsInfo[tab]}</p>
			</Container>
		</>
	);
};

export default TabsUp;
