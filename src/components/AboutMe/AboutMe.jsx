import { useState } from 'react';

import Layout from 'components/Layout/Layout';
import Button from 'react-bootstrap/Button';

import Resume from 'assets/images/Resume_.png';

const AboutMe = () => {
	const [show, setShow] = useState(false);
	return (
		<Layout>
			<div
				style={{
					width: '70%',
					height: '90%',
					margin: '0 auto',
					position: 'relative',
				}}
			>
				<Button type='button' onClick={() => setShow(!show)}>
					Resume
				</Button>
				<img
					src={Resume}
					style={{
						// width: '100%',
						height: '80vh',
						visibility: show ? 'visible' : 'hidden',
						margin: '0 auto',
						position: 'absolute',
						top: '3rem',
						left: 0,
					}}
				/>
			</div>
			<section
				style={{
					maxWidth: '128rem',
					backgroundColor: 'white',
					margin: '1rem auto',
					padding: '1rem',
				}}
			>
				<h1 style={{ fontSize: '3rem'}}>Приветствую</h1>
				<p style={{ fontSize: '2rem', marginTop: '2rem'}}>
					Приветствую! Меня зовут Юрий. Заинтересовала размещенная вами позиция
					Middle Frontend разработчика. Буду рад, если найдёте время связаться
					обсудить подробности этой роли. В качестве своей экспертизы, имею
					отличные знания и опыт работы с вёрсткой (HTML, SCSS, Tailwind), работа с
					формами, их валидацей. Использую в работе React с Redux Toolkit на
					ряду с JavaScript, что позволяет быстро создавать удобные
					пользователям компоненты приложения. Есть опыт работы с базой данных
					Mongo. Разбираюсь с NodeJS и его фреймворком Express. Прикрепляю своё
					резюме к сообщению. Готов выполнить тестовое задание и ответить на
					технические вопросы. Напишите, если готовы к взаимодействию. Спасибо.
				</p>
			</section>
		</Layout>
	);
};

export default AboutMe;
