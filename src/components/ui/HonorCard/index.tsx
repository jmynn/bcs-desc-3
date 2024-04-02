import { FunctionComponent, ReactNode } from 'react';
import styles from './HonorCard.module.css';

type Props = {
	imgSrc: string;
	title: string;
};

const HonorCard: FunctionComponent<Props> = ({ imgSrc, title }): ReactNode => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img
					src={imgSrc}
					alt='card img'
				/>
			</div>
			<div className={styles.title}>{title}</div>
		</div>
	);
};

export default HonorCard;
