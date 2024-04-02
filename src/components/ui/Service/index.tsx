import { FunctionComponent, ReactNode } from 'react';
import IconWeb from '../Icons/IconWeb';
import styles from './Service.module.css';

type Props = {
	title: string;
	price: string;
	content: string[];
};

const Service: FunctionComponent<Props> = ({
	content,
	price,
	title,
}): ReactNode => {
	return (
		<div className={styles.service}>
			<div className={styles.title}>
				<IconWeb />
				<h5>{title}</h5>
			</div>
			<div className={styles.price}>
				от <span>{price}</span>₽
			</div>
			<div className={styles.contents}>
				{content.map((data, i) => (
					<div
						key={`${i}-${price}-${title}`}
						className={styles.content}>
						{data}
					</div>
				))}
			</div>
		</div>
	);
};

export default Service;
