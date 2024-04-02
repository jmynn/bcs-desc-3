import { ReactNode } from 'react';
import styles from './Team.module.css';
import TeamChild from '../../ui/TeamChild';

const Team = (): ReactNode => {
	return (
		<section className={styles.team}>
			<div className={styles.block}>
				<h2 className={styles.title}>
					НЕМНОГО О нашей
					{'\n'}КОМАНДЕ
				</h2>
			</div>
			<div className={styles.block}>
				<div className={styles.about}>
					Наша команда по верстке сайтов на тильде -{'\n'}это
					профессионалы, готовые создать для вас
					{'\n'}уникальные и современные веб-страницы.
					{'\n'}Мы обладаем глубокими знаниями в{'\n'}области
					веб-дизайна и разработки, что
					{'\n'}позволяет нам создавать сайты, которые не
					{'\n'}только эстетичны, но и функциональны.
				</div>
				<div className={styles.table}>
					<TeamChild
						imgSrc='/team/prof-1.png'
						name='миронов алексей'
						position='дизайнер'
						initialMouseX={-4}
						initialMouseY={-5}
						positionGradientX={72.95}
						positionGradientY={62.24}
					/>
					<TeamChild
						imgSrc='/team/prof-2.png'
						name='кузнецова софия'
						position='маркетолог'
						initialMouseX={96}
						initialMouseY={102}
						positionGradientX={75.29}
						positionGradientY={66.85}
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;
