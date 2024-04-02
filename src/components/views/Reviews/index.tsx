import { ReactNode } from 'react';
import Container from '../../ui/Container';
import Review from '../../ui/Review';
import styles from './Reviews.module.css';

const reviews: {
	imgSrc: string;
	text: string;
}[] = [
	{
		imgSrc: '/reviews/review-1.png',
		text: 'Эти ребята просто удивительные! Я смогла создать свою страничку без единой проблемы. Рекомендую всем!',
	},
	{
		imgSrc: '/reviews/review-2.png',
		text: 'Спасибо команде за их услуги! Мой сайт выглядит стильно и профессионально благодаря им',
	},
	{
		imgSrc: '/reviews/review-3.png',
		text: 'Работа с этими ребятами была невероятно продуктивной. Они быстро поняли мои потребности и создали сайт, который превзошел все ожидания',
	},
	{
		imgSrc: '/reviews/review-4.png',
		text: 'Сотрудничество с этими дизайнерами - настоящее удовольствие! Они воплотили мои идеи в жизнь и создали сайт, о котором я мечтала',
	},
	{
		imgSrc: '/reviews/review-5.png',
		text: 'Дизайнеры этого сайта - настоящие мастера своего дела! Их профессионализм и креативность помогли моему сайту выделиться среди конкурентов',
	},
	{
		imgSrc: '/reviews/review-6.png',
		text: 'Сотрудничество с этими дизайнерами было отличным опытом! Они создали уникальный дизайн для моего сайта. А еще у них очень крутой сайт, какой гений это делал?',
	},
	{
		imgSrc: '/reviews/review-7.png',
		text: 'Спасибо дизайнеру за креативный подход к созданию моего сайта! Они проявили талант и внимание к деталям',
	},
];

const Reviews = (): ReactNode => {
	return (
		<section className={styles.reviews}>
			<Container>
				<div className={styles.row}>
					<h3 className={styles.path}>/отзывы</h3>
				</div>
				<div className={styles.row}>
					<h2 className={styles.title}>МНЕНИЕ О НАС</h2>
				</div>
				<div className={styles.row}>
					<div className={styles.cards}>
						{reviews.map((review, i) => (
							<Review
								key={`${i}-${review.imgSrc}`}
								{...review}
							/>
						))}
						<div className={styles.feedback}>
							<div className={styles.feedbackTitle}>
								ОСТАВЬТЕ ОТЗЫВ
							</div>
							<div className={styles.text}>
								Это поможет нам в{'\n'}дальнейшем улучшить нашу
								{'\n'}коммуникацию с{'\n'}клиентами
							</div>
							<button className={styles.btn}>ОТЗЫВ</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Reviews;
