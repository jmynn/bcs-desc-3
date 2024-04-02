import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import IconTg from '../Icons/IconTg';
import IconTilda from '../Icons/IconTilda';
import IconVk from '../Icons/IconVk';
import styles from './Footer.module.css';

const Footer = (): ReactNode => {
	return (
		<footer className={styles.footer}>
			<div className={styles.row}>
				<h2 className={styles.title}>
					СОЗДАДИМ ПРОЕКТ
					{'\n'}КОТОРЫЙ ВАС ВЫДЕЛИТ
				</h2>
			</div>
			<div className={styles.row}>
				<div className={styles.block}>
					<div className={styles.icons}>
						<div className={styles.icon}>
							<Link to={'/vk'}>
								<IconVk />
							</Link>
						</div>
						<div className={styles.icon}>
							<Link to={'/tg'}>
								<IconTg />
							</Link>
						</div>
						<div className={styles.icon}>
							<Link to={'/tilda'}>
								<IconTilda />
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.block}>
					<button className={styles.feedback}>
						<img
							src='/bracket-l.svg'
							alt='bracket'
						/>
						заказать проект
						<img
							src='/bracket-l.svg'
							alt='bracket'
						/>
					</button>
				</div>
				<div className={styles.block}>
					<div className={styles.info}>
						<Link
							to='tel:+7 (952) 696 66-52'
							className={styles.phone}>
							+7 (952) 696 66-52
						</Link>
						<Link
							to='tel:+7 (912) 259 43-07'
							className={styles.phone}>
							+7 (912) 259 43-07
						</Link>
						<div className={styles.text}>
							Мы на связи ПН-СБ
							{'\n'}с 9:00 до 20:00 часов по Москве
						</div>
					</div>
					<button className={styles.feedbackText}>
						заказать
						{'\n'}обратный звонок
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
