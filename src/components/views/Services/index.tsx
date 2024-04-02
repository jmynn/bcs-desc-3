import { ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import Service from '../../ui/Service';
import styles from './Services.module.css';

const data: {
	title: string;
	price: string;
	content: string[];
}[] = [
	{
		title: 'ЛЕНДИНГ',
		price: '9 000',
		content: [
			'Одностраничный сайт',
			'Аналитика основных конкурентов',
			'Прототип и копирайтинг',
			'1 дизайн - концепция',
			'Дизайн оставшихся блоков',
		],
	},
	{
		title: 'МНОГОСТРАНИЧНЫЙ',
		price: '12 000',
		content: [
			'Аналитика основных конкурентов',
			'Прототип и копирайтинг',
			'Дизайн главной страницы в Figma',
			'Вёрстка сайта на Тильде',
		],
	},
	{
		title: 'ИНТЕРНЕТ - МАГАЗИН',
		price: '19 000',
		content: [
			'Аналитика основных конкурентов',
			'Прототип и копирайтинг',
			'Дизайн главной страницы в Figma',
			'Вёрстка сайта на Тильде',
			'Подключение каталога корзины, онлайн-оплатыи CRM - системы',
		],
	},
];

const Services = (): ReactNode => {
	return (
		<section className={styles.services}>
			<div className={styles.row}>
				<div className={styles.column}>
					<h4 className={styles.path}>/услуги</h4>
				</div>
				<div className={styles.column}>
					<h2 className={styles.title}>МЫ ПРЕДЛАГАЕМ</h2>
					<h3 className={styles.subtitle}>
						Наша команда осуществляет
						{'\n'}полный спектр услуг по созданию сайта на Тильде
					</h3>
				</div>
				<MediaQuery minWidth={'1200px'}>
					<div className={styles.column}></div>
				</MediaQuery>
			</div>
			<div className={styles.row}>
				<div className={styles.list}>
					{data.map((item, i) => (
						<Service
							key={`${i}-${item.price}-${item.title}`}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
