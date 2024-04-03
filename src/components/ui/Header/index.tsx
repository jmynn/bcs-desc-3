import { ReactNode, useCallback, useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import IconClose from '../Icons/IconClose';
import IconMenu from '../Icons/IconMenu';
import Logo from '../Logo';
import Navigation from '../Navigation';
import styles from './Header.module.css';

const Header = (): ReactNode => {
	const [isVisible, setIsVisible] = useState(false);
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const handleInteraction = useCallback(() => {
		if(!isVisible) document.body.style.overflowY = 'hidden';
		else document.body.style.overflowY = 'auto';
		setIsVisible(prev => !prev)
	}, [isVisible])
	return (
		<header className={styles.header}>
			<Logo />
			<MediaQuery maxWidth={'767px'}>
				<div className={styles.menu}>
					<button onClick={handleInteraction}>
						{!isVisible ? <IconMenu /> : <IconClose />}
					</button>
				</div>
			</MediaQuery>
			{(isVisible || isTablet) && (
				<div className={styles.navigation}>
					<Navigation />
				</div>
			)}
		</header>
	);
};

export default Header;
