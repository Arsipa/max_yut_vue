import { createStore } from 'vuex'

export default createStore({
	state: {
		tel: '+7 (926) 352-61-85',
		email: 'uyut-m2012@yandex.ru',
		address: '125493, г. Москва, ул. Нарвская. д. 23, этаж 3, офис 310',
		address_maps_url: 'https://yandex.ru/maps/-/CDq6N81M',
		youtube: 'https://www.youtube.com/@user-wx5bw6xd5e/videos',

		categoryImages: {
			vstroennaya: [
				'/publicImg/vstroennaya/1.jpg',
				'/publicImg/vstroennaya/2.jpg',
				'/publicImg/vstroennaya/3.jpg',
				'/publicImg/vstroennaya/4.jpeg',
				'/publicImg/vstroennaya/5.jpg',
				'/publicImg/vstroennaya/6.jpeg',
			],
			nazakaz: [
				'/publicImg/nazakaz/1.jpg',
				'/publicImg/nazakaz/2.jpg',
				'/publicImg/nazakaz/3.jpg',
				'/publicImg/nazakaz/4.jpg',
				'/publicImg/nazakaz/5.jpg',
				'/publicImg/nazakaz/6.jpg',
			],
			garderobnaya: [
				'/publicImg/garderobnaya/1.jpeg',
				'/publicImg/garderobnaya/2.jpeg',
				'/publicImg/garderobnaya/3.jpeg',
				'/publicImg/garderobnaya/4.jpeg',
				'/publicImg/garderobnaya/5.jpeg',
				'/publicImg/garderobnaya/6.jpeg',
			],
			kupe: [
				'/publicImg/kupe/1.jpg',
				'/publicImg/kupe/2.jpg',
				'/publicImg/kupe/3.jpg',
				'/publicImg/kupe/4.jpg',
				'/publicImg/kupe/5.heic',
				'/publicImg/kupe/6.heic',
			],
			swing: [
				'/publicImg/swing/1.jpg',
				'/publicImg/swing/2.jpg',
				'/publicImg/swing/3.jpeg',
				'/publicImg/swing/4.jpg',
				'/publicImg/swing/5.jpg',
				'/publicImg/swing/6.jpg',
			],
			kuhni: [
				'/publicImg/kuhni/1.jpg',
				'/publicImg/kuhni/2.jpg',
				'/publicImg/kuhni/3.jpg',
				'/publicImg/kuhni/4.jpg',
				'/publicImg/kuhni/5.jpg',
				'/publicImg/kuhni/6.jpg',
			],
		},
		categories: [
			{
				title: 'Встроенная мебель',
				img: '/publicImg/vstroennaya/1.jpg',
				route: '/vstroennaya',
				type: 'category',
			},
			{
				title: 'Мебель на заказ',
				img: '/publicImg/nazakaz/1.jpg',
				route: '/nazakaz',
				type: 'category',
			},
			{
				title: 'Гардеробная',
				img: '/publicImg/garderobnaya/1.jpeg',
				route: '/garderobnaya',
				type: 'category',
			},
			{
				title: 'Шкафы-купе',
				img: '/publicImg/kupe/1.jpg',
				route: '/kupe',
				type: 'category',
			},
			{
				title: 'Шкафы распашные',
				img: '/publicImg/swing/1.jpg',
				route: '/swing',
				type: 'category',
			},
			{
				title: 'Кухни',
				img: '/publicImg/kuhni/1.jpg',
				route: '/kuhni',
				type: 'category',
			},
		],
		materials: [
			{
				title: 'Ведущая австрийская компания по производству ЛДСП',
				short_title: 'EEGGER',
				img: '/publicImg/materials/EEGGER.png.webp',
			},
			{
				title: 'Продукция для кухни современного европейского уровня качества',
				short_title: 'AMK ТРОЯ',
				img: '/publicImg/materials/amk.png.webp',
			},
			{
				title: 'Мойки, которые не требуют сложного ухода',
				short_title: 'Grand Fest',
				img: '/publicImg/materials/grandfest.png.webp',
			},
			{
				title: 'Один из лидеров рынка мебельной фурнитуры',
				short_title: 'Boyard',
				img: '/publicImg/materials/Boyard.png.webp',
			},
			{
				title: 'Один из самых крупных производителей мебельных фасадов в мире',
				short_title: 'AGT',
				img: '/publicImg/materials/agt.png.webp',
			},
			{
				title:
					'Высококачественная австрийская фурнитура для современной мебели',
				short_title: 'Blum',
				img: '/publicImg/materials/blum.png.webp',
			},
			{
				title: 'Крупнейший бренд искусственного камня',
				short_title: 'Tristone',
				img: '/publicImg/materials/tristone.jpg.webp',
			},
			{
				title: 'Мебельная фурнитура и комплектующие из Германии',
				short_title: 'Rehau',
				img: '/publicImg/materials/Rehau.png.webp',
			},
			{
				title:
					'Ведущий поставщик и производитель комплектующих для шкафов-купе',
				short_title: 'Aristo',
				img: '/publicImg/materials/Aristo.png.webp',
			},
		],
		certificates: [
			'/publicImg/sertificates/Screenshot_1.webp',
			'/publicImg/sertificates/Screenshot_2.webp',
			'/publicImg/sertificates/Screenshot_3.webp',
			'/publicImg/sertificates/Screenshot_4.webp',
			'/publicImg/sertificates/Screenshot_5.webp',
			'/publicImg/sertificates/Screenshot_6.webp',
			'/publicImg/sertificates/Screenshot_7.webp',
			'/publicImg/sertificates/Screenshot_8.webp',
			'/publicImg/sertificates/Screenshot_9.webp',
			'/publicImg/sertificates/Screenshot_10.webp',
			'/publicImg/sertificates/Screenshot_11.webp',
		],
		videos: [
			'https://www.youtube.com/embed/xhdOdr-YoA8',
			'https://www.youtube.com/embed/j2xDhYbBUyI',
			'https://www.youtube.com/embed/egM069KD73c',
			'https://www.youtube.com/embed/_stiEnoAses',
			'https://www.youtube.com/embed/Uyr4oeFGdz4',
			'https://www.youtube.com/embed/lLRjy28ceBM',
			'https://www.youtube.com/embed/M256Lfjcl6M',
			'https://www.youtube.com/embed/o9oBowJ6dxw',
			'https://www.youtube.com/embed/l_t22ijh38Y',
			'https://www.youtube.com/embed/_stiEnoAses',
			'https://www.youtube.com/embed/qKvb_Pv7tqM',
		],
	},
	getters: {
		getProductsByCategory: state => category => {
			return state.categoryImages[category]
		},
	},
	mutations: {},
	actions: {},
	modules: {},
})
