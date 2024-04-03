import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import IconTg from '../Icons/IconTg';
import IconWs from '../Icons/IconWs';
import styles from './Navigation.module.css';

const routes = [
	{
		to: '/test',
		label: 'услуги',
	},
	{
		to: '/test',
		label: 'работы',
	},
	{
		to: '/test',
		label: 'цены',
	},
	{
		to: '/test',
		label: 'контакты',
	},
];

const Navigation = (): ReactNode => {
	return (
		<nav className={styles.nav}>
			<NavLink
				to={'/test'}
				className={({ isActive }) =>
					isActive ? `${styles.active}` : ''
				}>
				Подарок
			</NavLink>
			{routes.map((route, i) => (
				<NavLink
					key={i}
					to={route.to}
					className={({ isActive }) =>
						isActive ? `${styles.active}` : ''
					}>
					{route.label}
				</NavLink>
			))}
			<div className={styles.socials}>
				<NavLink
					to={'/test'}
					className={({ isActive }) =>
						isActive ? `${styles.active}` : ''
					}>
					<IconTg />
				</NavLink>
				<NavLink
					to={'/test'}
					className={({ isActive }) =>
						isActive ? `${styles.active}` : ''
					}>
					<IconWs />
				</NavLink>
			</div>
		</nav>
	);
};

export default Navigation;
