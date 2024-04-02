import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import IconTg from '../Icons/IconTg';
import IconWs from '../Icons/IconWs';
import styles from './Navigation.module.css';

const routes = [
	{
		to: '/services',
		label: 'услуги',
	},
	{
		to: '/jobs',
		label: 'работы',
	},
	{
		to: '/price',
		label: 'цены',
	},
	{
		to: '/contacts',
		label: 'контакты',
	},
];

const Navigation = (): ReactNode => {
	return (
		<nav className={styles.nav}>
			<NavLink
					to={'/gift'}
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
					to={'/tg'}
					className={({ isActive }) =>
						isActive ? `${styles.active}` : ''
					}>
					<IconTg />
				</NavLink>
				<NavLink
					to={'/ws'}
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
