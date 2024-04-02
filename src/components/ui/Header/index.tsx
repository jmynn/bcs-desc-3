import { ReactNode, useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import IconClose from '../Icons/IconClose';
import IconMenu from '../Icons/IconMenu';
import Logo from '../Logo';
import Navigation from '../Navigation';
import styles from './Header.module.css';

const Header = (): ReactNode => {
	const [isOpen, setIsOpen] = useState(false);
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<header className={styles.header}>
			<Logo />
			<MediaQuery maxWidth={'767px'}>
				<div className={styles.menu}>
					<button onClick={() => setIsOpen((prev) => !prev)}>
						{!isOpen ? <IconMenu /> : <IconClose />}
					</button>
				</div>
			</MediaQuery>
			{(isOpen || isTablet) && (
				<div className={styles.navigation}>
					<Navigation />
				</div>
			)}
		</header>
	);
};

export default Header;
