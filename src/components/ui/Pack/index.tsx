import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';
import styles from './Pack.module.css';

const paths: string[] = [
	'/pic-1 rotate.png',
	'/pic-2 rotate.png',
	'/pic-3 rotate.png',
	'/pic-4 rotate.png',
];
const picturesVariant: Variants = {
	hidden: (i: number) => ({
		opacity: 0,
		y: 10 * i,
	}),
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Pack = (): ReactNode => {
	return (
		<div className={styles.pack}>
			{paths.map((path, i) => (
				<motion.img
					src={path}
					key={`${i}-${path}`}
					variants={picturesVariant}
					initial='hidden'
					animate='visible'
					custom={i}
					transition={{
						ease: 'easeInOut',
						duration: 1.5,
						delay: 0.3 * i,
					}}
				/>
			))}
		</div>
	);
};

export default Pack;
