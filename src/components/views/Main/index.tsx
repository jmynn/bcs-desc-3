import { Variants, motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import ModalFeedback from '../../ui/ModalFeedback';
import styles from './Main.module.css';

const paths: string[] = [
	'/pic-1 rotate.png',
	'/pic-2 rotate.png',
	'/pic-3 rotate.png',
	'/pic-4 rotate.png',
];
const picturesVariant: Variants = {
	hidden: (i: number) => ({
		opacity: 0,
		y: -100 * i,
	}),
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Main = (): ReactNode => {
	const [isOpen, setIsOpen] = useState(false);
	const promocode = useRef('NEFT2GAZ8');
	const handleClick = () => {
		navigator.clipboard
			.writeText(promocode.current)
			.then(() => alert('copied'))
			.catch(() => alert('error'));
	};
	return (
		<main className={styles.main}>
			<div className={styles.block}>
				<h1 className={styles.title}>
					ДИЗАЙНИМ, ВЕРСТАЕМ
					{'\n'}
					<span>САЙТЫ НА ТИЛЬДЕ</span>
				</h1>
				<div className={styles.subtitle}>
					что делает нас особенными? Мы не просто создаем
					{'\n'}сайты, мы создаем целые истории, которые
					{'\n'}захватывают внимание и оставляют незабываемое
					{'\n'}впечатление.
				</div>
				<div className={styles.info}>
					<button
						className={styles.feedback}
						onClick={() => setIsOpen((prev) => !prev)}>
						Связаться с нами
					</button>
					{isOpen && <ModalFeedback />}
					<div
						className={styles.promocode}
						onClick={handleClick}>
						{promocode.current}
					</div>
					<div className={styles.saletext}>
						10%
						{'\n'}по промокоду
					</div>
				</div>
			</div>
			<div className={styles.block}>
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
							whileHover={{}}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default Main;
