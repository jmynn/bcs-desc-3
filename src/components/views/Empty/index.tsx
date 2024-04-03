import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './Empty.module.css';

const Empty = (): ReactNode => {
	return <motion.h1 className={styles.title} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeInOut'}}>Пусто</motion.h1>;
};

export default Empty;
