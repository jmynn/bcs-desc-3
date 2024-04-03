import { motion } from 'framer-motion';
import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import IconFlag from '../Icons/IconFlag';
import styles from './ModalFeedback.module.css';

const ModalFeedback = (): ReactNode => {
	const { handleChangeVisibility } = useContext(ModalContext);
	return (
		<>
			<motion.div
				className={styles.modal}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.2, ease: 'circOut' }}>
				<div className={styles.row}>
					<h1 className={styles.title}>Обсудить проект</h1>
					<div className={styles.subtitle}>
						Оставьте свои контактные данные
						{'\n'}для обсуждения вашего проекта
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.feedback}>
						<form action='#'>
							<div className={styles.block}>
								<div className={styles.column}>
									<label
										htmlFor='firstName'
										className={styles.label}>
										Имя
									</label>
									<input
										type='text'
										name='firstName'
										id='firstName'
										placeholder='Алексей'
									/>
								</div>
								<div className={styles.column}>
									<label
										htmlFor='phone'
										className={styles.label}>
										Телефон
									</label>
									<div className={styles.field}>
										<IconFlag />
										<input
											type='tel'
											name='phone'
											id='phone'
											placeholder='+7 (888) 333 22-22'
										/>
									</div>
								</div>
							</div>
							<div className={styles.block}>
								<label
									htmlFor='wishes'
									className={styles.label}>
									Ваши пожелания по сайту
								</label>
								<textarea
									name='wishes'
									id='wishes'
									cols={30}
									rows={2}
									className={styles.wishes}></textarea>
							</div>
							<div className={styles.block}>
								<button
									type='submit'
									className={styles.submit}>
									Оставить заявку
								</button>
							</div>
						</form>
					</div>
				</div>
				<img
					src='/mask-l.png'
					alt='mask'
					className={styles.mask}
				/>
			</motion.div>
			<motion.div
				className={styles.backdrop}
				onClick={handleChangeVisibility}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'circOut' }}></motion.div>
		</>
	);
};

export default ModalFeedback;
