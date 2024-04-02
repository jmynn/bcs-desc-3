import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from 'framer-motion';
import { FunctionComponent, MouseEvent, ReactNode } from 'react';
import styles from './TeamChild.module.css';

type Props = {
	name: string;
	position: string;
	initialMouseX: number;
	initialMouseY: number;
	imgSrc: string;
	positionGradientX: number;
	positionGradientY: number;
};

const TeamChild: FunctionComponent<Props> = ({
	initialMouseX,
	initialMouseY,
	name,
	position,
	imgSrc,
	positionGradientX,
	positionGradientY,
}): ReactNode => {
	const mouseX = useMotionValue(initialMouseX);
	const mouseY = useMotionValue(initialMouseY);
	const mouseXSpring = useSpring(mouseX);
	const mouseYSpring = useSpring(mouseY);

	const handleMouseMove = ({
		clientX,
		clientY,
		currentTarget,
	}: MouseEvent) => {
		const { left, top, width, height } =
			currentTarget.getBoundingClientRect();

		mouseX.set(((clientX - left) / width) * 100);
		mouseY.set(((clientY - top) / height) * 100);
	};
	const handleMouseLeave = () => {
		mouseX.set(initialMouseX);
		mouseY.set(initialMouseY);
	};

	const spotlightBackground = useMotionTemplate`radial-gradient(${positionGradientX}% ${positionGradientY}% at ${mouseXSpring}% ${mouseYSpring}%, rgba(207, 252, 134, 0.3), rgba(217, 217, 217, 0) 100%)`;

	return (
		<motion.div
			className={styles.column}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				background: spotlightBackground,
			}}
			transition={{
				ease: 'easeInOut',
				duration: 5000,
			}}>
			<div className={styles.name}>{name}</div>
			<div className={styles.info}>
				<div className={styles.avatar}>
					<img
						src={imgSrc}
						alt='avatar'
					/>
				</div>
				<div className={styles.position}>{position}</div>
			</div>
		</motion.div>
	);
};

export default TeamChild;
