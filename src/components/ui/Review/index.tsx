import { FunctionComponent, ReactNode } from 'react';
import styles from './Review.module.css';
type Props = {
	imgSrc: string;
	text: string;
};

const Review: FunctionComponent<Props> = ({ imgSrc, text }): ReactNode => {
	return (
		<div className={styles.review}>
			<div className={styles.avatar}>
				<img
					src={imgSrc}
					alt='avatar'
				/>
			</div>
			<div className={styles.text}>{text}</div>
		</div>
	);
};

export default Review;
