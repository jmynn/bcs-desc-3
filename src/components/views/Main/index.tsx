import { motion } from 'framer-motion';
import { ReactNode, useContext, useRef } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import Pack from '../../ui/Pack';
import styles from './Main.module.css';

const mainVariants = {
	hidden: {
		x: -150,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};
const mainTransition = {
	duration: 1,
	ease: 'backIn',
};
const infoVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Main = (): ReactNode => {
	const { handleChangeVisibility } = useContext(ModalContext);
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
				<motion.h1
					className={styles.title}
					initial='hidden'
					animate='visible'
					variants={mainVariants}
					transition={mainTransition}>
					ДИЗАЙНИМ, ВЕРСТАЕМ
					{'\n'}
					<span>САЙТЫ НА ТИЛЬДЕ</span>
				</motion.h1>
				<motion.div
					className={styles.subtitle}
					initial='hidden'
					animate='visible'
					variants={mainVariants}
					transition={{ ...mainTransition, delay: 0.4 }}>
					что делает нас особенными? Мы не просто создаем
					{'\n'}сайты, мы создаем целые истории, которые
					{'\n'}захватывают внимание и оставляют незабываемое
					{'\n'}впечатление.
				</motion.div>
				<div className={styles.info}>
					<motion.button
						initial='hidden'
						animate='visible'
						variants={infoVariants}
						transition={{
							...mainTransition,
							delay: 1.2,
							ease: 'easeInOut',
						}}
						className={styles.feedback}
						onClick={handleChangeVisibility}>
						Связаться с нами
					</motion.button>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={infoVariants}
						transition={{
							...mainTransition,
							delay: 1.3,
							ease: 'easeInOut',
						}}
						className={styles.promocode}
						onClick={handleClick}>
						{promocode.current}
					</motion.div>
					<motion.div
						className={styles.saletext}
						initial='hidden'
						animate='visible'
						variants={infoVariants}
						transition={{
							...mainTransition,
							delay: 1.4,
							ease: 'easeInOut',
						}}>
						10%
						{'\n'}по промокоду
					</motion.div>
				</div>
			</div>
			<div className={styles.block}>
				<Pack />
			</div>
		</main>
	);
};

export default Main;
