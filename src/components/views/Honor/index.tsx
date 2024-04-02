import { ReactNode } from 'react';
import Container from '../../ui/Container';
import HonorCard from '../../ui/HonorCard';
import styles from './Honor.module.css';

const Honor = (): ReactNode => {
	return (
		<section className={styles.honor}>
			<Container>
				<div className={styles.row}>
					<h2 className={styles.title}>
						/наша
						{'\n'}гордость
					</h2>
					<div className={styles.subtitle}>
						Подготовим для Вас 3{'\n'}коммерческих
						{'\n'}предложения по
						{'\n'}созданию сайта
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.cards}>
						<HonorCard
							imgSrc='/restaurant.png'
							title='лендинг'
						/>
						<HonorCard
							imgSrc='/alpha-trade.png'
							title='многостраничный'
						/>
						<HonorCard
							imgSrc='/ff-ural.png'
							title='интернет - магазин'
						/>
					</div>
				</div>
				<div className={styles.row}>
					<button className={styles.feedback}>
						<img
							src='/bracket-s.svg'
							alt='bracket'
						/>
						заказать сайт
						<img
							src='/bracket-s.svg'
							alt='bracket'
						/>
					</button>
				</div>
			</Container>
		</section>
	);
};

export default Honor;
