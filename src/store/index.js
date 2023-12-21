import { createStore } from "vuex";
import router from "../router/index";

export default createStore({
    state: {
        tel: "+7 (926) 352-61-85",
        email: "uyut-m2012@yandex.ru",
        address: "125493, г. Москва, ул. Нарвская. д. 23, этаж 3, офис 310",
        address_maps_url: "https://yandex.ru/maps/-/CDq6N81M",
        youtube: "https://www.youtube.com/@user-wx5bw6xd5e/videos",
        products: {
            vstroennaya: [
                {
                    id: 1,
                    title: "Встроенная мебель 1",
                    img: "/publicImg/vstroennaya/100/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/vstroennaya/100/1-0.jpg.webp",
                        "/publicImg/vstroennaya/100/1-1.jpg.webp",
                        "/publicImg/vstroennaya/100/1-2.jpg.webp",
                        "/publicImg/vstroennaya/100/1-3.jpg.webp",
                        "/publicImg/vstroennaya/100/1-4.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "500х600х2700",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость",
                            value: "12 000р.",
                        },
                    ],
                    category: "vstroennaya",
                },
                {
                    id: 2,
                    title: "Встроенная мебель 2",
                    img: "/publicImg/vstroennaya/101/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/vstroennaya/101/1-0.jpg.webp",
                        "/publicImg/vstroennaya/101/1-1.jpg.webp",
                        "/publicImg/vstroennaya/101/1-2.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "1000х600х1500",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость",
                            value: "8 000р.",
                        },
                    ],
                    category: "vstroennaya",
                },
                {
                    id: 3,
                    title: "Встроенная мебель 3",
                    img: "/publicImg/vstroennaya/102/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/vstroennaya/102/1-0.jpg.webp",
                        "/publicImg/vstroennaya/102/1-1.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Профиль",
                            value: "Aristo",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "1200х600х2700",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость",
                            value: "40 000р.",
                        },
                    ],
                    category: "vstroennaya",
                },
                {
                    id: 4,
                    title: "Встроенная мебель 4",
                    img: "/publicImg/vstroennaya/103/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/vstroennaya/103/1-0.jpg.webp",
                        "/publicImg/vstroennaya/103/1-1.jpg.webp",
                        "/publicImg/vstroennaya/103/1-2.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "1500х600х2700",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyrd",
                        },
                        {
                            title: "Профиль",
                            value: "Aristo",
                        },
                        {
                            title: "Стоимость",
                            value: "65 000р.",
                        },
                    ],
                    category: "vstroennaya",
                },
            ],
            nazakaz: [
                {
                    id: 5,
                    title: "Комод дубнинская",
                    img: "/publicImg/nazakaz/101/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/101/1-0.jpg.webp",
                        "/publicImg/nazakaz/101/1-1.jpg.webp",
                        "/publicImg/nazakaz/101/1-2.jpg.webp",
                        "/publicImg/nazakaz/101/1-3.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "3250х480х1100",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38 мм и 26 мм",
                        },
                        {
                            title: "Фурнитура ящики",
                            value: "Boyrd",
                        },
                        {
                            title: "Фурнитура петли",
                            value: "Blum",
                        },
                        {
                            title: "Стоимость",
                            value: "164 000р.",
                        },
                    ],
                    category: "nazakaz",
                },
                {
                    id: 6,
                    title: "Прихожая дубнинская",
                    img: "/publicImg/nazakaz/102/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                    ],
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "эмаль+лак",
                        },
                        {
                            title: "Фурнитура ящиков",
                            value: "Boyrd",
                        },
                        {
                            title: "Фурнитура петель",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "4000х500х2550",
                        },
                        {
                            title: "Стоимость",
                            value: "90 000р.",
                        },
                    ],
                    category: "nazakaz",
                },
                {
                    id: 7,
                    title: "Прихожая кунцево",
                    img: "/publicImg/nazakaz/103/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/103/1-0.jpg.webp",
                        "/publicImg/nazakaz/103/1-1.jpg.webp",
                        "/publicImg/nazakaz/103/1-2.jpg.webp",
                        "/publicImg/nazakaz/103/1-3.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd.",
                        },
                        {
                            title: "Обувница Ш-Г-В",
                            value: "2000х200х450",
                        },
                        {
                            title: "Первое изделие Ш-Г-В",
                            value: "2000х600х2700",
                        },
                        {
                            title: "Второе изделие Ш-Г-В",
                            value: "2000х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "74 400р.",
                        },
                    ],
                },
                {
                    id: 8,
                    title: "Прихожая люберцы",
                    img: "/publicImg/nazakaz/104/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/104/1-0.jpg.webp",
                        "/publicImg/nazakaz/104/1-1.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "1800х400х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "33 080р.",
                        },
                    ],
                },
                {
                    id: 9,
                    title: "Рабочая зона кунцево",
                    img: "/publicImg/nazakaz/105/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/105/1-0.jpg.webp",
                        "/publicImg/nazakaz/105/1-1.jpg.webp",
                        "/publicImg/nazakaz/105/1-2.jpg.webp",
                        "/publicImg/nazakaz/105/1-3.jpg.webp",
                        "/publicImg/nazakaz/105/1-4.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "3850х400х1800",
                        },
                        {
                            title: "Фурнитура ящиков",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "70 000р.",
                        },
                    ],
                },
                {
                    id: 10,
                    title: "Рабочая зона у окна митино",
                    img: "/publicImg/nazakaz/106/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/106/1-0.jpg.webp",
                        "/publicImg/nazakaz/106/1-1.jpg.webp",
                        "/publicImg/nazakaz/106/1-2.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "3850х600х2600",
                        },
                        {
                            title: "Фурнитура ящиков",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "90 000р.",
                        },
                    ],
                },
                {
                    id: 11,
                    title: "Спальня люберцы",
                    img: "/publicImg/nazakaz/107/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/107/1-0.jpg.webp",
                        "/publicImg/nazakaz/107/1-1.jpg.webp",
                        "/publicImg/nazakaz/107/1-2.jpg.webp",
                        "/publicImg/nazakaz/107/1-3.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "2400х400х2000",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "50 000р.",
                        },
                    ],
                },
                {
                    id: 12,
                    title: "ТВ зона кунцево",
                    img: "/publicImg/nazakaz/108/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/108/1-0.jpg.webp",
                        "/publicImg/nazakaz/108/1-1.jpg.webp",
                        "/publicImg/nazakaz/108/1-2.jpg.webp",
                        "/publicImg/nazakaz/108/1-3.jpg.webp",
                        "/publicImg/nazakaz/108/1-4.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "4000х500х2660",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "150 000р.",
                        },
                    ],
                },
                {
                    id: 13,
                    title: "Шкаф депо",
                    img: "/publicImg/nazakaz/109/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/109/1-0.jpg.webp",
                        "/publicImg/nazakaz/109/1-1.jpg.webp",
                        "/publicImg/nazakaz/109/1-2.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "5000х600х2600",
                        },
                        {
                            title: "Стоимость",
                            value: "140 000р.",
                        },
                    ],
                },
                {
                    id: 14,
                    title: "Бутылочница",
                    img: "/publicImg/nazakaz/110/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/110/1-0.jpg.webp",
                        "/publicImg/nazakaz/110/1-1.jpg.webp",
                        "/publicImg/nazakaz/110/1-2.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ эмаль 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "1000х500х2700",
                        },
                        {
                            title: "Стоимость",
                            value: "45 000р.",
                        },
                    ],
                },
                {
                    id: 15,
                    title: "Гардеробная пастернака",
                    img: "/publicImg/nazakaz/111/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/111/1-0.jpg.webp",
                        "/publicImg/nazakaz/111/1-1.jpg.webp",
                        "/publicImg/nazakaz/111/1-2.jpg.webp",
                        "/publicImg/nazakaz/111/1-3.jpg.webp",
                        "/publicImg/nazakaz/111/1-4.jpg.webp",
                        "/publicImg/nazakaz/111/1-5.jpg.webp",
                        "/publicImg/nazakaz/111/1-6.jpg.webp",
                        "/publicImg/nazakaz/111/1-7.jpg.webp",
                        "/publicImg/nazakaz/111/1-8.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "4000х500х2700",
                        },
                        {
                            title: "Стоимость",
                            value: "180 000р.",
                        },
                    ],
                },
                {
                    id: 16,
                    title: "Детская нахабино",
                    img: "/publicImg/nazakaz/112/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/112/1-0.jpg.webp",
                        "/publicImg/nazakaz/112/1-1.jpg.webp",
                        "/publicImg/nazakaz/112/1-2.jpg.webp",
                        "/publicImg/nazakaz/112/1-3.jpg.webp",
                        "/publicImg/nazakaz/112/1-4.jpg.webp",
                        "/publicImg/nazakaz/112/1-5.jpg.webp",
                        "/publicImg/nazakaz/112/1-6.jpg.webp",
                        "/publicImg/nazakaz/112/1-7.jpg.webp",
                        "/publicImg/nazakaz/112/1-8.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "6000х500х2700",
                        },
                        {
                            title: "Стоимость",
                            value: "220 000р.",
                        },
                    ],
                },
                {
                    id: 17,
                    title: "Детская путилково",
                    img: "/publicImg/nazakaz/113/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/113/1-0.jpg.webp",
                        "/publicImg/nazakaz/113/1-1.jpg.webp",
                        "/publicImg/nazakaz/113/1-2.jpg.webp",
                        "/publicImg/nazakaz/113/1-3.jpg.webp",
                        "/publicImg/nazakaz/113/1-4.jpg.webp",
                        "/publicImg/nazakaz/113/1-5.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "6000х500х2700",
                        },
                        {
                            title: "Стоимость",
                            value: "220 000р.",
                        },
                    ],
                },
                {
                    id: 18,
                    title: "Малый санузел маршала",
                    img: "/publicImg/nazakaz/114/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/114/1-0.jpg.webp",
                        "/publicImg/nazakaz/114/1-1.jpg.webp",
                        "/publicImg/nazakaz/114/1-2.jpg.webp",
                        "/publicImg/nazakaz/114/1-3.jpg.webp",
                        "/publicImg/nazakaz/114/1-4.jpg.webp",
                        "/publicImg/nazakaz/114/1-5.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фасады",
                            value: "Эмаль 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "1000х500х2500",
                        },
                        {
                            title: "Стоимость:",
                            value: "97 000р.",
                        },
                    ],
                },
                {
                    id: 19,
                    title: "Обувница пастернака",
                    img: "/publicImg/nazakaz/115/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/115/1-0.jpg.webp",
                        "/publicImg/nazakaz/115/1-1.jpg.webp",
                        "/publicImg/nazakaz/115/1-2.jpg.webp",
                        "/publicImg/nazakaz/115/1-3.jpg.webp",
                        "/publicImg/nazakaz/115/1-4.jpg.webp",
                        "/publicImg/nazakaz/115/1-5.jpg.webp",
                        "/publicImg/nazakaz/115/1-6.jpg.webp",
                        "/publicImg/nazakaz/115/1-7.jpg.webp",
                        "/publicImg/nazakaz/115/1-8.jpg.webp",
                        "/publicImg/nazakaz/115/1-9.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фасады",
                            value: "Эмаль 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х300х1400",
                        },
                        {
                            title: "Стоимость: ",
                            value: "110 000р.",
                        },
                    ],
                },
                {
                    id: 20,
                    title: "Прихожая пастернака",
                    img: "/publicImg/nazakaz/116/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/116/1-0.jpg.webp",
                        "/publicImg/nazakaz/116/1-1.jpg.webp",
                        "/publicImg/nazakaz/116/1-2.jpg.webp",
                        "/publicImg/nazakaz/116/1-3.jpg.webp",
                        "/publicImg/nazakaz/116/1-4.jpg.webp",
                        "/publicImg/nazakaz/116/1-5.jpg.webp",
                        "/publicImg/nazakaz/116/1-6.jpg.webp",
                        "/publicImg/nazakaz/116/1-7.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "Эмаль 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х500х2800",
                        },
                        {
                            title: "Стоимость:",
                            value: "280 000р.",
                        },
                    ],
                },
                {
                    id: 21,
                    title: "Рабочая зона балашиха",
                    img: "/publicImg/nazakaz/117/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/117/1-0.jpg.webp",
                        "/publicImg/nazakaz/117/1-1.jpg.webp",
                        "/publicImg/nazakaz/117/1-2.jpg.webp",
                        "/publicImg/nazakaz/117/1-3.jpg.webp",
                        "/publicImg/nazakaz/117/1-4.jpg.webp",
                        "/publicImg/nazakaz/117/1-5.jpg.webp",
                        "/publicImg/nazakaz/117/1-6.jpg.webp",
                        "/publicImg/nazakaz/117/1-7.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм, 38мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х500х2800",
                        },
                        {
                            title: "Стоимость:",
                            value: "120 000р.",
                        },
                    ],
                },
                {
                    id: 22,
                    title: "Санузел маршала",
                    img: "/publicImg/nazakaz/118/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                        "/publicImg/nazakaz/102/1-5.jpg.webp",
                        "/publicImg/nazakaz/102/1-6.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фасады",
                            value: "Эмаль 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "2000х500х2500",
                        },
                        {
                            title: "Стоимость:",
                            value: "147 000р.",
                        },
                    ],
                },
                {
                    id: 23,
                    title: "Санузел пастернака",
                    img: "/publicImg/nazakaz/119/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм, 25мм",
                        },
                        {
                            title: "Фасады",
                            value: "Эмаль 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х500х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "170 000р.",
                        },
                    ],
                },
                {
                    id: 24,
                    title: "Санузел реутов",
                    img: "/publicImg/nazakaz/120/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 18 мм",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Столешница",
                            value: "Камень",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "1500х500х1000",
                        },
                        {
                            title: "Стоимость:",
                            value: "78 000р.",
                        },
                    ],
                },
                {
                    id: 25,
                    title: "ТВ зона маршала",
                    img: "/publicImg/nazakaz/121/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                        "/publicImg/nazakaz/102/1-5.jpg.webp",
                        "/publicImg/nazakaz/102/1-6.jpg.webp",
                        "/publicImg/nazakaz/102/1-7.jpg.webp",
                        "/publicImg/nazakaz/102/1-8.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "Алюминий",
                        },
                        {
                            title: "Фурнитура",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х500х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "280 000р.",
                        },
                    ],
                },
                {
                    id: 26,
                    title: "ТВ зона тушино",
                    img: "/publicImg/nazakaz/122/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/nazakaz/102/1-0.jpg.webp",
                        "/publicImg/nazakaz/102/1-1.jpg.webp",
                        "/publicImg/nazakaz/102/1-2.jpg.webp",
                        "/publicImg/nazakaz/102/1-3.jpg.webp",
                        "/publicImg/nazakaz/102/1-4.jpg.webp",
                        "/publicImg/nazakaz/102/1-5.jpg.webp",
                        "/publicImg/nazakaz/102/1-6.jpg.webp",
                        "/publicImg/nazakaz/102/1-7.jpg.webp",
                        "/publicImg/nazakaz/102/1-8.jpg.webp",
                    ],
                    category: "nazakaz",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады ",
                            value: "Алюминий",
                        },
                        {
                            title: "Фурнитура",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х500х2600",
                        },
                        {
                            title: "Стоимость:",
                            value: "220 000р.",
                        },
                    ],
                },
            ],
            garderobnaya: [
                {
                    id: 27,
                    title: "Гардеробная комната 1",
                    img: "/publicImg/garderobnaya/100/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/garderobnaya/100/1-0.jpg.webp",
                        "/publicImg/garderobnaya/100/1-1.jpg.webp",
                    ],
                    category: "garderobnaya",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "6000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "90 000р.",
                        },
                    ],
                },
                {
                    id: 28,
                    title: "Гардеробная комната 2",
                    img: "/publicImg/garderobnaya/101/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/garderobnaya/101/1-0.jpg.webp",
                        "/publicImg/garderobnaya/101/1-1.jpg.webp",
                        "/publicImg/garderobnaya/101/1-2.jpg.webp",
                        "/publicImg/garderobnaya/101/1-3.jpg.webp",
                        "/publicImg/garderobnaya/101/1-4.jpg.webp",
                    ],
                    category: "garderobnaya",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Стоимость:",
                            value: "25 000р.",
                        },
                    ],
                },
            ],
            kupe: [
                {
                    id: 29,
                    title: "Шкаф красногорск",
                    img: "/publicImg/kupe/102/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/102/1-0.jpg.webp",
                        "/publicImg/kupe/102/1-1.jpg.webp",
                        "/publicImg/kupe/102/1-2.jpg.webp",
                        "/publicImg/kupe/102/1-3.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "2000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "BLUM",
                        },
                        {
                            title: "Стоимость",
                            value: "134 000р.",
                        },
                    ],
                },
                {
                    id: 30,
                    title: "Шкаф купе люберцы",
                    img: "/publicImg/kupe/103/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/103/1-0.jpg.webp",
                        "/publicImg/kupe/103/1-1.jpg.webp",
                        "/publicImg/kupe/103/1-2.jpg.webp",
                        "/publicImg/kupe/103/1-3.jpg.webp",
                        "/publicImg/kupe/103/1-4.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "1500х600х2600",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость",
                            value: "34 900р.",
                        },
                    ],
                },
                {
                    id: 31,
                    title: "Шкаф люберцы",
                    img: "/publicImg/kupe/104/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/104/1-0.jpg.webp",
                        "/publicImg/kupe/104/1-1.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Профиль:",
                            value: "Aristo",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "2400х600х2588",
                        },
                        {
                            title: "Стоимость",
                            value: "90 000р.",
                        },
                    ],
                },
                {
                    id: 32,
                    title: "Шкаф реутов",
                    img: "/publicImg/kupe/106/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/106/1-0.jpg.webp",
                        "/publicImg/kupe/106/1-1.jpg.webp",
                        "/publicImg/kupe/106/1-2.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Профиль:",
                            value: "Aristo",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "1200х1000х2600",
                        },
                        {
                            title: "Стоимость",
                            value: "70 000р",
                        },
                    ],
                },
                {
                    id: 33,
                    title: "Шкафы купе дубнинская",
                    img: "/publicImg/kupe/108/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/108/1-0.jpg.webp",
                        "/publicImg/kupe/108/1-1.jpg.webp",
                        "/publicImg/kupe/108/1-2.jpg.webp",
                        "/publicImg/kupe/108/1-3.jpg.webp",
                        "/publicImg/kupe/108/1-4.jpg.webp",
                        "/publicImg/kupe/108/1-5.jpg.webp",
                        "/publicImg/kupe/108/1-6.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура ящиков",
                            value: "Boyrd",
                        },
                        {
                            title: "Фурнитура петель",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х600х2700",
                        },
                        {
                            title: "Стоимость",
                            value: "90 600р.",
                        },
                    ],
                },
                {
                    id: 34,
                    title: "Шкафы купе денис",
                    img: "/publicImg/kupe/110/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/110/1-0.jpg.webp",
                        "/publicImg/kupe/110/1-1.jpg.webp",
                        "/publicImg/kupe/110/1-2.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "4000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "120 000р.",
                        },
                    ],
                },
                {
                    id: 35,
                    title: "Шкафы купе рассказовка",
                    img: "/publicImg/kupe/111/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/111/1-0.jpg.webp",
                        "/publicImg/kupe/111/1-1.jpg.webp",
                        "/publicImg/kupe/111/1-2.jpg.webp",
                        "/publicImg/kupe/111/1-3.jpg.webp",
                        "/publicImg/kupe/111/1-4.jpg.webp",
                        "/publicImg/kupe/111/1-5.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Алюминиевый профиль",
                            value: "Aristo",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "2000х700х2800",
                        },
                        {
                            title: "Стоимость:",
                            value: "78 000р.",
                        },
                    ],
                },
                {
                    id: 36,
                    title: "Шкафы купе нахабино",
                    img: "/publicImg/kupe/112/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/112/1-0.jpg.webp",
                        "/publicImg/kupe/112/1-1.jpg.webp",
                        "/publicImg/kupe/112/1-2.jpg.webp",
                        "/publicImg/kupe/112/1-3.jpg.webp",
                        "/publicImg/kupe/112/1-4.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Алюминиевый профиль",
                            value: "Aristo",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "4000х600х2600",
                        },
                        {
                            title: "Стоимость:",
                            value: "200 000р.",
                        },
                    ],
                },
                {
                    id: 37,
                    title: "Шкафы купе опалиха",
                    img: "/publicImg/kupe/113/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/113/1-0.jpg.webp",
                        "/publicImg/kupe/113/1-1.jpg.webp",
                        "/publicImg/kupe/113/1-2.jpg.webp",
                        "/publicImg/kupe/113/1-3.jpg.webp",
                        "/publicImg/kupe/113/1-4.jpg.webp",
                        "/publicImg/kupe/113/1-5.jpg.webp",
                        "/publicImg/kupe/113/1-6.jpg.webp",
                        "/publicImg/kupe/113/1-7.jpg.webp",
                        "/publicImg/kupe/113/1-8.jpg.webp",
                        "/publicImg/kupe/113/1-9.jpg.webp",
                    ],
                    category: "kupe",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Алюминиевый профиль",
                            value: "Aristo",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "1500х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "120 000р.",
                        },
                    ],
                },
            ],
            swing: [
                {
                    id: 38,
                    title: "Детская дубнинская",
                    img: "/publicImg/swing/101/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/101/1-0.jpg.webp",
                        "/publicImg/swing/101/1-1.jpg.webp",
                        "/publicImg/swing/101/1-2.jpg.webp",
                        "/publicImg/swing/101/1-3.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "4000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "BLUM",
                        },
                        {
                            title: "Стоимость",
                            value: "116 500р.",
                        },
                    ],
                },
                {
                    id: 39,
                    title: "Шкаф распашной Александр",
                    img: "/publicImg/swing/102/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/102/1-0.jpg.webp",
                        "/publicImg/swing/102/1-1.jpg.webp",
                        "/publicImg/swing/102/1-2.jpg.webp",
                        "/publicImg/swing/102/1-3.jpg.webp",
                        "/publicImg/swing/102/1-4.jpg.webp",
                        "/publicImg/swing/102/1-5.jpg.webp",
                        "/publicImg/swing/102/1-6.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3700х500х2500",
                        },
                        {
                            title: "Стоимость:",
                            value: "120 000р.",
                        },
                    ],
                },
                {
                    id: 40,
                    title: "Шкаф распашной Красногорск",
                    img: "/publicImg/swing/103/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/103/1-0.jpg.webp",
                        "/publicImg/swing/103/1-1.jpg.webp",
                        "/publicImg/swing/103/1-2.jpg.webp",
                        "/publicImg/swing/103/1-3.jpg.webp",
                        "/publicImg/swing/103/1-4.jpg.webp",
                        "/publicImg/swing/103/1-5.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 18мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х500х2600",
                        },
                        {
                            title: "Стоимость:",
                            value: "220 000р.",
                        },
                    ],
                },
                {
                    id: 41,
                    title: "Шкаф распашной Тушино",
                    img: "/publicImg/swing/104/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/104/1-0.jpg.webp",
                        "/publicImg/swing/104/1-1.jpg.webp",
                        "/publicImg/swing/104/1-2.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "2000х500х2600",
                        },
                        {
                            title: "Стоимость:",
                            value: "150 000р.",
                        },
                    ],
                },
                {
                    id: 42,
                    title: "Шкаф распашной Люберцы",
                    img: "/publicImg/swing/105/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/105/1-0.jpg.webp",
                        "/publicImg/swing/105/1-1.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фурнитура ящиков",
                            value: "Boyrd",
                        },
                        {
                            title: "Фурнитура петель",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В)",
                            value: "2700х500х2550",
                        },
                        {
                            title: "Стоимость",
                            value: "116 500р",
                        },
                    ],
                },
                {
                    id: 43,
                    title: "Шкаф эмаль Перово",
                    img: "/publicImg/swing/106/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/swing/106/1-0.jpg.webp",
                        "/publicImg/swing/106/1-1.jpg.webp",
                        "/publicImg/swing/106/1-2.jpg.webp",
                        "/publicImg/swing/106/1-3.jpg.webp",
                        "/publicImg/swing/106/1-4.jpg.webp",
                        "/publicImg/swing/106/1-5.jpg.webp",
                        "/publicImg/swing/106/1-6.jpg.webp",
                        "/publicImg/swing/106/1-7.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады ",
                            value: "МДФ эмаль",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5500х600х2800",
                        },
                        {
                            title: "Стоимость:",
                            value: "350 000р.",
                        },
                    ],
                },
                {
                    id: 45,
                    title: "Шкаф Чернов",
                    img: "/publicImg/kupe/107/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/107/1-0.jpg.webp",
                        "/publicImg/kupe/107/1-1.jpg.webp",
                        "/publicImg/kupe/107/1-2.jpg.webp",
                        "/publicImg/kupe/107/1-3.jpg.webp",
                        "/publicImg/kupe/107/1-4.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5000х600х2600",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "120 000р.",
                        },
                    ],
                },
                {
                    id: 45,
                    title: "Шкафы Алёна",
                    img: "/publicImg/kupe/109/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kupe/109/1-0.jpg.webp",
                        "/publicImg/kupe/109/1-1.jpg.webp",
                        "/publicImg/kupe/109/1-2.jpg.webp",
                        "/publicImg/kupe/109/1-3.jpg.webp",
                    ],
                    category: "swing",
                    info: [
                        {
                            title: "Корпус и фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5000х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "150 000р.",
                        },
                    ],
                },
            ],
            kuhni: [
                {
                    id: 46,
                    title: "Кухня Алексей",
                    img: "/publicImg/kuhni/101/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/101/1-0.jpg.webp",
                        "/publicImg/kuhni/101/1-1.jpg.webp",
                        "/publicImg/kuhni/101/1-2.jpg.webp",
                        "/publicImg/kuhni/101/1-3.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус:",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады:",
                            value: "Rehau 22мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Алюминиевый профиль:",
                            value: "Golight",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "4000х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "380 000р.",
                        },
                    ],
                },
                {
                    id: 47,
                    title: "Кухня ВДНХ",
                    img: "/publicImg/kuhni/102/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/102/1-0.jpg.webp",
                        "/publicImg/kuhni/102/1-1.jpg.webp",
                        "/publicImg/kuhni/102/1-2.jpg.webp",
                        "/publicImg/kuhni/102/1-3.jpg.webp",
                        "/publicImg/kuhni/102/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "Камень Акрил 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3,5 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "292 000р.",
                        },
                    ],
                },
                {
                    id: 48,
                    title: "Кухня ДСП митино",
                    img: "/publicImg/kuhni/103/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/103/1-0.jpg.webp",
                        "/publicImg/kuhni/103/1-1.jpg.webp",
                        "/publicImg/kuhni/103/1-2.jpg.webp",
                        "/publicImg/kuhni/103/1-3.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3,5 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "93 000р.",
                        },
                    ],
                },
                {
                    id: 49,
                    title: "Кухня Кунцево",
                    img: "/publicImg/kuhni/104/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/104/1-0.jpg.webp",
                        "/publicImg/kuhni/104/1-1.jpg.webp",
                        "/publicImg/kuhni/104/1-2.jpg.webp",
                        "/publicImg/kuhni/104/1-3.jpg.webp",
                        "/publicImg/kuhni/104/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ пленка soft touch 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyrd",
                        },
                        {
                            title: "Габариты:",
                            value: "5,2 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "284 000р.",
                        },
                    ],
                },
                {
                    id: 50,
                    title: "Кухня Лобня",
                    img: "/publicImg/kuhni/105/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/105/1-0.jpg.webp",
                        "/publicImg/kuhni/105/1-1.jpg.webp",
                        "/publicImg/kuhni/105/1-2.jpg.webp",
                        "/publicImg/kuhni/105/1-3.jpg.webp",
                        "/publicImg/kuhni/105/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "Камень Акрил 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты:",
                            value: "7,2 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "484 000р.",
                        },
                    ],
                },
                {
                    id: 51,
                    title: "Кухня Люберцы",
                    img: "/publicImg/kuhni/106/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/106/1-0.jpg.webp",
                        "/publicImg/kuhni/106/1-1.jpg.webp",
                        "/publicImg/kuhni/106/1-2.jpg.webp",
                        "/publicImg/kuhni/106/1-3.jpg.webp",
                        "/publicImg/kuhni/106/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "Камень ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "299000р.",
                        },
                    ],
                },
                {
                    id: 52,
                    title: "Кухня окружная",
                    img: "/publicImg/kuhni/107/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/107/1-0.jpg.webp",
                        "/publicImg/kuhni/107/1-1.jpg.webp",
                        "/publicImg/kuhni/107/1-2.jpg.webp",
                        "/publicImg/kuhni/107/1-3.jpg.webp",
                        "/publicImg/kuhni/107/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ Rehau 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты:",
                            value: "4,8 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "188 300р.",
                        },
                    ],
                },
                {
                    id: 53,
                    title: "Кухня ренат",
                    img: "/publicImg/kuhni/108/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/108/1-0.jpg.webp",
                        "/publicImg/kuhni/108/1-1.jpg.webp",
                        "/publicImg/kuhni/108/1-2.jpg.webp",
                        "/publicImg/kuhni/108/1-3.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус:",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады:",
                            value: "ЛДСП Lamarti 18мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "4200х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "170 000р.",
                        },
                    ],
                },
                {
                    id: 54,
                    title: "Кухня реутов",
                    img: "/publicImg/kuhni/109/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/109/1-0.jpg.webp",
                        "/publicImg/kuhni/109/1-1.jpg.webp",
                        "/publicImg/kuhni/109/1-2.jpg.webp",
                        "/publicImg/kuhni/109/1-3.jpg.webp",
                        "/publicImg/kuhni/109/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус:",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады:",
                            value: "AGT 19мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "6500х600х2800",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "330 000р.",
                        },
                    ],
                },
                {
                    id: 55,
                    title: "Кухня сколково",
                    img: "/publicImg/kuhni/110/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/110/1-0.jpg.webp",
                        "/publicImg/kuhni/110/1-1.jpg.webp",
                        "/publicImg/kuhni/110/1-2.jpg.webp",
                        "/publicImg/kuhni/110/1-3.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус:",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады:",
                            value: "AGT 19мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3000х600х2800",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "160 000р.",
                        },
                    ],
                },
                {
                    id: 56,
                    title: "Кухня солнечногорск",
                    img: "/publicImg/kuhni/111/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/111/1-0.jpg.webp",
                        "/publicImg/kuhni/111/1-1.jpg.webp",
                        "/publicImg/kuhni/111/1-2.jpg.webp",
                        "/publicImg/kuhni/111/1-3.jpg.webp",
                        "/publicImg/kuhni/111/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты:",
                            value: "2,5 п /м",
                        },
                        {
                            title: "Стоимость:",
                            value: "125 000р.",
                        },
                    ],
                },
                {
                    id: 57,
                    title: "Кухня аня",
                    img: "/publicImg/kuhni/112/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/112/1-0.jpg.webp",
                        "/publicImg/kuhni/112/1-1.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ Alternative 20 мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "135 000р.",
                        },
                    ],
                },
                {
                    id: 58,
                    title: "Кухня балашиха",
                    img: "/publicImg/kuhni/113/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/113/1-0.jpg.webp",
                        "/publicImg/kuhni/113/1-1.jpg.webp",
                        "/publicImg/kuhni/113/1-2.jpg.webp",
                        "/publicImg/kuhni/113/1-3.jpg.webp",
                        "/publicImg/kuhni/113/1-4.jpg.webp",
                        "/publicImg/kuhni/113/1-5.jpg.webp",
                        "/publicImg/kuhni/113/1-6.jpg.webp",
                        "/publicImg/kuhni/113/1-7.jpg.webp",
                        "/publicImg/kuhni/113/1-8.jpg.webp",
                        "/publicImg/kuhni/113/1-9.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х600х2700",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Стоимость:",
                            value: "220 000р.",
                        },
                    ],
                },
                {
                    id: 59,
                    title: "Кухня водный",
                    img: "/publicImg/kuhni/114/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/114/1-0.jpg.webp",
                        "/publicImg/kuhni/114/1-1.jpg.webp",
                        "/publicImg/kuhni/114/1-2.jpg.webp",
                        "/publicImg/kuhni/114/1-3.jpg.webp",
                        "/publicImg/kuhni/114/1-4.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ эмаль 20мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "2500х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "240 000р.",
                        },
                    ],
                },
                {
                    id: 60,
                    title: "Кухня маршала",
                    img: "/publicImg/kuhni/115/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/115/1-0.jpg.webp",
                        "/publicImg/kuhni/115/1-1.jpg.webp",
                        "/publicImg/kuhni/115/1-2.jpg.webp",
                        "/publicImg/kuhni/115/1-3.jpg.webp",
                        "/publicImg/kuhni/115/1-4.jpg.webp",
                        "/publicImg/kuhni/115/1-5.jpg.webp",
                        "/publicImg/kuhni/115/1-6.jpg.webp",
                        "/publicImg/kuhni/115/1-7.jpg.webp",
                        "/publicImg/kuhni/115/1-8.jpg.webp",
                        "/publicImg/kuhni/115/1-9.jpg.webp",
                        "/publicImg/kuhni/115/1-10.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ эмаль 20мм",
                        },
                        {
                            title: "Столешница",
                            value: "Камень",
                        },
                        {
                            title: "Стеновая панель",
                            value: "Камень",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Blum",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5000х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "600 000р.",
                        },
                    ],
                },
                {
                    id: 61,
                    title: "Кухня рассказовка",
                    img: "/publicImg/kuhni/116/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/116/1-0.jpg.webp",
                        "/publicImg/kuhni/116/1-1.jpg.webp",
                        "/publicImg/kuhni/116/1-2.jpg.webp",
                        "/publicImg/kuhni/116/1-3.jpg.webp",
                        "/publicImg/kuhni/116/1-4.jpg.webp",
                        "/publicImg/kuhni/116/1-5.jpg.webp",
                        "/publicImg/kuhni/116/1-6.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "3500х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "180 000р.",
                        },
                    ],
                },
                {
                    id: 62,
                    title: "Кухня реутов 3",
                    img: "/publicImg/kuhni/117/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/117/1-0.jpg.webp",
                        "/publicImg/kuhni/117/1-1.jpg.webp",
                        "/publicImg/kuhni/117/1-2.jpg.webp",
                        "/publicImg/kuhni/117/1-3.jpg.webp",
                        "/publicImg/kuhni/117/1-4.jpg.webp",
                        "/publicImg/kuhni/117/1-5.jpg.webp",
                        "/publicImg/kuhni/117/1-6.jpg.webp",
                        "/publicImg/kuhni/117/1-7.jpg.webp",
                        "/publicImg/kuhni/117/1-8.jpg.webp",
                        "/publicImg/kuhni/117/1-9.jpg.webp",
                        "/publicImg/kuhni/117/1-10.jpg.webp",
                        "/publicImg/kuhni/117/1-11.jpg.webp",
                        "/publicImg/kuhni/117/1-12.jpg.webp",
                        "/publicImg/kuhni/117/1-13.jpg.webp",
                        "/publicImg/kuhni/117/1-14.jpg.webp",
                        "/publicImg/kuhni/117/1-15.jpg.webp",
                        "/publicImg/kuhni/117/1-16.jpg.webp",
                        "/publicImg/kuhni/117/1-17.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ AGT 19мм",
                        },
                        {
                            title: "Столешница",
                            value: "ЛДСП 38мм",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5500х600х2800",
                        },
                        {
                            title: "Стоимость:",
                            value: "250 000р.",
                        },
                    ],
                },
                {
                    id: 63,
                    title: "Кухня руетов эмаль",
                    img: "/publicImg/kuhni/118/1-0.jpg.webp",
                    imgList: [
                        "/publicImg/kuhni/118/1-0.jpg.webp",
                        "/publicImg/kuhni/118/1-1.jpg.webp",
                        "/publicImg/kuhni/118/1-2.jpg.webp",
                        "/publicImg/kuhni/118/1-3.jpg.webp",
                        "/publicImg/kuhni/118/1-4.jpg.webp",
                        "/publicImg/kuhni/118/1-5.jpg.webp",
                        "/publicImg/kuhni/118/1-6.jpg.webp",
                        "/publicImg/kuhni/118/1-7.jpg.webp",
                        "/publicImg/kuhni/118/1-8.jpg.webp",
                        "/publicImg/kuhni/118/1-9.jpg.webp",
                        "/publicImg/kuhni/118/1-10.jpg.webp",
                        "/publicImg/kuhni/118/1-11.jpg.webp",
                        "/publicImg/kuhni/118/1-12.jpg.webp",
                        "/publicImg/kuhni/118/1-13.jpg.webp",
                        "/publicImg/kuhni/118/1-14.jpg.webp",
                        "/publicImg/kuhni/118/1-15.jpg.webp",
                        "/publicImg/kuhni/118/1-16.jpg.webp",
                        "/publicImg/kuhni/118/1-17.jpg.webp",
                        "/publicImg/kuhni/118/1-18.jpg.webp",
                        "/publicImg/kuhni/118/1-19.jpg.webp",
                        "/publicImg/kuhni/118/1-20.jpg.webp",
                        "/publicImg/kuhni/118/1-21.jpg.webp",
                    ],
                    category: "kuhni",
                    info: [
                        {
                            title: "Корпус ",
                            value: "ЛДСП Egger 16мм",
                        },
                        {
                            title: "Фасады",
                            value: "МДФ эмаль 20мм",
                        },
                        {
                            title: "Столешница",
                            value: "Камень",
                        },
                        {
                            title: "Стеновая панель",
                            value: "Камень",
                        },
                        {
                            title: "Фурнитура:",
                            value: "Boyard",
                        },
                        {
                            title: "Габариты (Ш-Г-В):",
                            value: "5000х600х2700",
                        },
                        {
                            title: "Стоимость:",
                            value: "450 000р.",
                        },
                    ],
                },
            ],
            mattresses: [
                {
                    id: 64,
                    title: "Langa",
                    img: "/publicImg/mattresses/01/1-0.png",
                    category: "mattresses",
                    variants: [
                        {
                            title: "Матрас LANGA D",
                            img: "/publicImg/mattresses/01/1-1.png",
                            description:
                                "Матрас LANGA D – станет верным решением для тех, кто хочет всё и сразу и за разумные деньги! Или проще говоря, кто никак не может определиться, какое именно наполнение хочет для своего матраса, какую жесткость… LANGA D сочетает в себе несколько различных материалов и является вариантом зима-лето: сторона холкон+кокос = тепло, так необходимое нам в зимнее время; сторона латекс+кокос = приятная прохлада и комфорт в летний период. Чехол матраса выполнен из трикотажа «Органика» – нежный на ощупь, он содержит хлопковые нити, что несомненно придется Вам по душе и порадует тактильно.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "18 600",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "22 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "25 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "28 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "30 800",
                                },
                                {
                                    size: "200х200",
                                    price: "33 600",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Пружинный блок Армированный 256 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Латекс 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж Organik"],
                                },
                            ],
                        },
                        {
                            title: "Матрас LANGA F",
                            img: "/publicImg/mattresses/01/1-2.png",
                            description:
                                "LANGA F – очень интересный по своему наполнению матрас и, вместе с тем, весьма комфортный. Несущая система матраса – блок независимых пружин «Соты», что увеличивает допустимую весовую нагрузку на спальное место. LANGA F имеет разные по наполнению стороны и тем самым может стать отличным вариантом для тех, кто ищет матрас: зима/лето. Зимняя сторона содержит холкон, придающий матрасу ощущение исходящего тепла, а кокосовая койра отлично справляется с весовой нагрузкой. Летняя сторона – сочетание латекса, придающего прохладу и упругость сизаля – износостойкого натурального волокна, выгодно подчеркивающего работу пружинного блока. LANGA F – матрас, который нравится и юным хозяевам, и старшему поколению. Очень семейный матрас… По праву занимает верхние строчки в рейтинге продаж матрасов LANGA.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "20 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "24 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "27 900",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "30 900",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "33 900",
                                },
                                {
                                    size: "200х200",
                                    price: "37 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 24 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 20 мм",
                                        "Сизаль 10 мм",
                                        "Войлок",
                                        "Пружинный блок Соты 290 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Стеганый трикотаж Ручки, аэраторы",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Матрас LANGA G",
                            img: "/publicImg/mattresses/01/1-3.png",
                            description:
                                "LANGA G – односторонний матрас с ярко выраженным анатомическим эффектом. Матрас подстраивается под Вас, создавая высочайшее качество комфорта, повторяя все изгибы Вашего тела, при этом нет чувства «проваливания» в матрас. Входящий в состав натуральный конский волос, прошитый на джутовом полотне, не только является практически вечным по износу материалом, но и отлично подчеркивает ортопедические свойства пружинного блока «Мультипакет». LANGA G – поистине волшебный матрас с эффектом полной релаксации. Сложно описывать свойства данной модели, достаточно раз прилечь, чтобы полюбить его навсегда…",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "25 000",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "31 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "35 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "39 600",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "43 700",
                                },
                                {
                                    size: "200х200",
                                    price: "47 900",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Меморикс 40 мм",
                                        "Конский волос",
                                        "Войлок",
                                        "Пружинный блок Мультипакет 512 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый на синтепоне (100 гр.) (цветной) Бурлет: 3D сетка",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Матрас LANGA L",
                            img: "/publicImg/mattresses/01/1-4.png",
                            description:
                                "LANGA L – еще одна модель для сторонников минимализма, но при этом с повышенным комфортом. Беспружинный матрас с верхним слоем из меморикса, способного «запоминать» все изгибы Вашего тела и подстраиваться под Вас. Но меморикс в этой модели еще и с легким массажным эффектом, так как материал имеет ячеистую форму. Единственный матрас в линейке LANGA с ячеистым мемориксом! LANGA L – минимум «начинки», максимум комфорта!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "19 000",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "23 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "26 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "29 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "32 200",
                                },
                                {
                                    size: "200х200",
                                    price: "35 100",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 16 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Меморикс ячеистый 40 мм",
                                        "Пенополиуретан 120 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж стеганый"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA N",
                            img: "/publicImg/mattresses/01/1-5.png",
                            description:
                                "LANGA N – высокий (28 см) матрас с элитным наполнением: пружинный блок «Мультипакет» сверху и снизу объят кокосовой латексированной койрой 3-х сантиметровой толщины. Поверх кокоса расположены слои плотного перфорированного латекса также высотой 3 см. В итоге модель LANGA N способна выдерживать серьёзные весовые нагрузки (150-170 кг) на одно спальное место. Данный матрас весьма жесткий за счет мультиблока и кокоса. Но эту жесткость приятно разбавляет латекс. Охарактеризовать матрас LANGA N можно как комфортно-жесткий. Чехол матраса – две разные ткани, прекрасно сочетающиеся и дополняющие друг друга. Пышный черно-бело-серый верх и низ гармонично смотрится с серенькой боковинкой-рогожкой.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "28 500",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "35 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "40 800",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "45 700",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "50 500",
                                },
                                {
                                    size: "200х200",
                                    price: "55 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 28 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Кокосовая койра 30 мм",
                                        "Войлок",
                                        "Пружинный блок",
                                        "Мультипакет 512 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 30 мм",
                                        "Латекс 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый, бурлет – серая рогожка Ручки",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Z",
                            img: "/publicImg/mattresses/01/1-6.png",
                            description:
                                "Новый матрас в серии LANGA. Для тех, кто ищет надежный, комфортный матрас премиум –сегмента по невысокой стоимости. Изысканный, умеренно мягкий и невероятно комфортный, этот матрас станет воплощением мечты многих, кто искал именно красивый по внешнему виду и достойный по наполнению матрас из премиум-линейки, который вместе с тем приятно порадует своей мягкостью и стоимостью.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "18 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "22 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "24 900",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "27 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "29 900",
                                },
                                {
                                    size: "200х200",
                                    price: "32 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок",
                                        "Холкон 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж нестеганый с набивным рисунком. Бурлет дополнен аэраторной 3D сеткой",
                                        "Имеются ручки",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA A",
                            img: "/publicImg/mattresses/01/1-7.png",
                            description:
                                "Матрас LANGA А – один из самых комфортных матрасов линейки LANGA. Классическое сочетание элитных наполнителей: латексированный кокос и перфорированный латекс создают истинный комфорт без излишеств. Чехол матраса выполнен из двойного жаккарда, стеганого на пенополиуретане, что добавляет данной модели больший уют и удобство. LANGA А – чопорная классика… Остановив свой выбор на матрасе LANGA А, Вы будете очень довольны…",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "23 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "29 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "32 900",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "36 700",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "40 200",
                                },
                                {
                                    size: "200х200",
                                    price: "44 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 25 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Латекс 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Двойной жаккард Ручки, аэраторы"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Блюз",
                            img: "/publicImg/mattresses/01/1-8.png",
                            description:
                                "LANGA Блюз – комфортный матрас-беспружинник. Ничего лишнего: латекс 7 зон обеспечит комфорт и создаст эффект микро-массажа. Несущей системой матраса является блок из пенополиуретана высотой 10 см. Обратная сторона матраса – латекс 3 см. Завершением исполнения матраса является чехол из строгой серой ткани, стеганой на ППУ. LANGA Блюз – сочетание классики и минимализма. Удобно и практично.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "19 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "24 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "27 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "30 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "33 400",
                                },
                                {
                                    size: "200х200",
                                    price: "36 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 17 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 7-ми зонный 30 мм",
                                        "Пенополиуретан 100 мм",
                                        "Латекс 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Рогожка"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA B",
                            img: "/publicImg/mattresses/01/1-9.png",
                            description:
                                "Матрас LANGA В – мягкий, нежный матрас в беленьком трикотаже… Этакое пёрышко среди матрасов. Данная модель абсолютно лишена жестких наполнителей. Пружинный блок дополнительно армирован для увеличения износостойкости мягких слоёв матраса. Если Вы ищете мягкую модель, но без ощущения «проваливаюсь в матрас», то LANGA В – это Ваш оптимальный вариант.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 580",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "19 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "22 000",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "24 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "26 400",
                                },
                                {
                                    size: "200х200",
                                    price: "28 500",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 30 мм",
                                        "Войлок",
                                        "Пружинный блок Армированный 256 пр./м2",
                                        "Войлок",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый трикотаж Ручки"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Галант",
                            img: "/publicImg/mattresses/01/2-0.png",
                            description:
                                "С таким матрасом – кровать вовсе не нужна! Напольный матрас – новое нестандартное решение творческой команды фабрики LANGA! Роскошь по доступной цене – Вы мечтали об этом, не правда ли?.. Пришивной топпер в ткани Антистресс с объемным наполнением придаст максимальное чувство комфорта. Блок независимых пружин безупречно справится с возложенной на него функцией обеспечения ортопедического эффекта. Основой и высотой матраса является блок из плотного пенополиуретана. Высоту матраса Вы выбираете самостоятельно (доп.опция). Остановите свой выбор на интересном интерьерном решении – изысканный и элегантный напольный матрас LANGA Галант! И больше никаких скрипучих кроватей!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "32 500",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "38 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "44 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "48 600",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "52 900",
                                },
                                {
                                    size: "200х200",
                                    price: "57 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 28 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Синтепон 600 гр",
                                        "Войлок 10 мм",
                                        "Матрас: Холкон 30 мм",
                                        "Войлок 10 мм",
                                        "Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок 10 мм",
                                        "Пенополиуретан 100 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Рогожка"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA E",
                            img: "/publicImg/mattresses/01/2-1.png",
                            description:
                                "LANGA Е – мягкий, уютный матрас для настоящих неженок в хорошем смысле. Имеет с одной стороны анатомичный слой, повторяющий все особенности строения тела. Другая сторона матраса имеет покрытие шерстью мериноса и идеально подходит для эксплуатации матраса в зимнее время. Не имея в составе жестких наполнителей, эта модель идеально подойдет Вам, если Вы ищете очень мягкий, комфортный матрас с ярко выраженным анатомическим эффектом. Чехол матраса – ткань Антистресс, прикасаться к которой одно удовольствие!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "25 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "31 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "35 300",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "39 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "43 200",
                                },
                                {
                                    size: "200х200",
                                    price: "47 300",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 25 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Меморикс 40 мм",
                                        "Мебелин 10 мм",
                                        "Пружинный блок Соты 290 пр./м2",
                                        "Мебелин 10 мм",
                                        "Холкон 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "1 сторона – Шерсть мериноса 2 сторона – Антистресс стеганый",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Зефир",
                            img: "/publicImg/mattresses/01/2-2.png",
                            description:
                                "LANGA Зефир – изысканный матрас для настоящих «гурманов» сна… LANGA Зефир состоит из двух блоков независимых пружин (как две половины зефира). Одна сторона плотная, упругая (латекс 3 см+ сизаль), другая сторона – нежная, мягкая (мебеллин+холкон 3 см). Пышный чехол подчеркивает высоту матраса и окончательно дополняет впечатление воздушного пирожного… Подарите себе комфорт и сладкие сновидения с помощью матраса Зефир…",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "26 500",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "33 000",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "37 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "42 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "46 400",
                                },
                                {
                                    size: "200х200",
                                    price: "50 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 29 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Сизаль 10 мм",
                                        "Войлок Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок",
                                        "Мебелин 10 мм",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "1 сторона – Шерсть мериноса 2 сторона – Антистресс стеганый",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Идеал",
                            img: "/publicImg/mattresses/01/2-3.png",
                            description:
                                "Матрас LANGA Идеал – весьма мягкий матрас, имеющий разные стороны жесткости: одна – средняя, ближе к мягкой, другая сторона – мягкая. Матрас имеет богатый внешний вид, так как чехол выполнен из плотного двойного жаккарда стеганого на ППУ. LANGA оснащена дополнительно аэраторами, что способствует лучшему воздухообмену в матрасе.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "20 000",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "22 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "24 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "26 600",
                                },
                                {
                                    size: "200х200",
                                    price: "28 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок",
                                        "Холкон 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Двойной жаккард Ручки, аэраторы"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA K",
                            img: "/publicImg/mattresses/01/2-4.png",
                            description:
                                "LANGA К – модель для сторонников комфортного минимализма. В простой на первый взгляд состав мы поместили «изюминку» в виде рельефного пенополиуретана. Плотный упругий беспружинный матрас с эффектом легкого микромассажа. Вам понравится!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 100",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "20 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "22 300",
                                },
                                {
                                    size: "200х200",
                                    price: "24 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 15 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан волновой 25 мм (с массажным эффектом)",
                                        "Пенополиуретан 120 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж стеганый Ручки"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA M",
                            img: "/publicImg/mattresses/01/2-5.png",
                            description:
                                "LANGA М – интересный по наполнению, мягенький матрас с легким массажным эффектом с одной стороны. Если для Вас предпочтительно: одна сторона мягкая, вторая – средней жесткости и при этом хочется некой изюминки в матрасе, да так, чтобы недорого, то это явно Ваш матрас! Блок независимых пружин дополнительно армирован спанбондом, что повышает срок службы мягких наполнителей матраса.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "15 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "18 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "21 000",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "23 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "25 200",
                                },
                                {
                                    size: "200х200",
                                    price: "27 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан волновой 25 мм (с массажным эффектом)",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Пружинный блок Армированный 256 пр./м2",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж стеганый"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Маэстро",
                            img: "/publicImg/mattresses/01/2-6.png",
                            description:
                                "Двусторонний матрас с «зеркальным» наполнением из натурального латекса и усиленным кокосом. В стандартном исполнении – блок независимых пружин средней жесткости, но по Вашему желанию может быть заменен на усиленный (соты, мультипакет). В технологии изготовления чехла используется ручная вязка матраса для придания комфорта верхних слоев. Бурлетная часть матраса имеет вставку по всему периметру из воздухопроницаемой, современной ткани с 3D-эффектом, которая способствует более эффективной циркуляции воздуха внутри матраса.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "40 440",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "48 470",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "53 930",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "59 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "64 590",
                                },
                                {
                                    size: "200х200",
                                    price: "69 960",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 30 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс перфорированный 30 мм",
                                        "Кокосовая койра латексированная 20 мм",
                                        "Войлок",
                                        "Блок независимых пружин 256 шт/ м.кв",
                                        "Войлок",
                                        "Кокосовая койра латексированная 20 мм",
                                        "Латекс перфорированный 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "BLACK & WHITE стеганый на 500 гр. холкон + Пенополиуретан 8 мм",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Мелодия",
                            img: "/publicImg/mattresses/01/2-7.png",
                            description:
                                "Langa Мелодия – односторонний матрас повышенного комфорта. Сизаль в составе правильно подчеркивает работу независимого пружинного блока, а 4 см латекса придают неповторимый уют спальному месту. Упругий матрас Langa Мелодия – это мелодия Ваших самых лучших сновидений. Подарите себе удовольствие комфорта, незабываемых, ярких снов и прекрасного настроения после отдыха на матрасе Langa Мелодия…",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "22 200",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "27 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "30 790",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "34 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "37 650",
                                },
                                {
                                    size: "200х200",
                                    price: "41 100",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 40 мм",
                                        "Сизаль 10 мм",
                                        "Войлок",
                                        "Блок независимых пружин 256 шт/ м.кв",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж, стеганый на 250 гр. холкона + 8 мм ППУ",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA H",
                            img: "/publicImg/mattresses/01/2-8.png",
                            description:
                                "LANGA H – мягкие и упругие слои матраса скрывают блок независимых пружин «Мультипакет», способный выдерживать большие весовые нагрузки. Отсутствие жестких наполнителей могли бы отнести данную модель к категории «мягкий», но – нет, мощный пружинный блок напомнит, что данный матрас средней жесткости – ближе к мягким. Входящий в состав латекс (3 см) придает LANGA Н уютный комфорт и упругость. Холкон (3 см) – с другой стороны – отличная возможность использовать сторону в качестве зимней.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "27 100",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "32 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "36 700",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "41 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "45 600",
                                },
                                {
                                    size: "200х200",
                                    price: "49 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 25 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Конский волос",
                                        "Войлок",
                                        "Пружинный блок Мультипакет 512 пр./м2",
                                        "Войлок",
                                        "Мебелин 10 мм",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж стеганый (Bright Look)"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA O",
                            img: "/publicImg/mattresses/01/2-9.png",
                            description:
                                "LANGA О – матрас, похожий по внешнему виду и свойствам на LANGA N, но «начинка» матраса более экономична: пружинный блок 256 пружин, по обе стороны которого 3 см кокосовой латексированной койры. Верхний и нижний слои матраса – холкон высотой 3 см. Жесткий матрас с весовой нагрузкой 120-130 кг на спальное место. Прекрасный вариант для тех, кто предпочитает спать на жестком и для кого внешний вид матраса имеет значение.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "21 100",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "25 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "29 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "32 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "35 300",
                                },
                                {
                                    size: "200х200",
                                    price: "38 500",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 29 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 30 мм",
                                        "Кокосовая койра 30 мм",
                                        "Войлок",
                                        "Пружинный блок Армированный 256 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 30 мм",
                                        "Холкон 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый, бурлет – серая рогожка Ручки !",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Сильвер",
                            img: "/publicImg/mattresses/01/3-0.png",
                            description:
                                "Матрас LANGA Сильвер – модель с категорично разными сторонами по жесткости: средняя – ближе к мягкой/очень жесткая. Несущая система матраса – пружинный блок «мультипакет». Такая модель отлично подойдет для Вас, если Вы предпочитаете периодически менять свои пожелания к жесткости: «надоело спать на жестком, хочу теперь на мягеньком». Однако и «мягенькое» – очень относительно… В целом матрас отлично подойдет как людям со средней массой тела, так и богатырям!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "23 100",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "28 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "32 500",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "36 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "40 000",
                                },
                                {
                                    size: "200х200",
                                    price: "43 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 24 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Войлок",
                                        "Пружинный блок Мультипакет 512 пр./м2",
                                        "Войлок",
                                        "Кокосовая койра 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый (Silver Relax)",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA CM",
                            img: "/publicImg/mattresses/01/3-1.png",
                            description:
                                "Матрас LANGA См – интересная по своим свойствам модель, дополненная великолепным внешним видом за счет пышного белого трикотажного чехла с серебряной нитью. Матрас имеет две стороны разной жесткости (зима-лето) и будет актуален по своему наполнению и внешнему виду круглый год. Летняя сторона- пожестче, а чехол создает эффект белого летнего облачка. Зимняя сторона – мягче, даёт чувство тепла, а внешний вид словно пышный белый искрящийся снежок подарит Вам чувство домашнего уюта и волшебных зимних праздников… В классическом понимании LANGA См – матрас средней жесткости ближе к жестким. Несущая система – блок независимых пружин «мультипакет», что позволяет матрасу выдерживать большие весовые нагрузки.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "20 000",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "24 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "27 800",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "30 800",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "33 900",
                                },
                                {
                                    size: "200х200",
                                    price: "37 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 24 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Пружинный блок Мультипакет 512 пр./м2",
                                        "Войлок",
                                        "Холкон 20 мм",
                                        "Кокосовая койра 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый (Silver Relax)",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA София",
                            img: "/publicImg/mattresses/01/3-2.png",
                            description: "МАТРАС LANGA СОФИЯ",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "19 480",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "21 700",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "23 770",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "25 880",
                                },
                                {
                                    size: "200х200",
                                    price: "27 980",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 40 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Стоун",
                            img: "/publicImg/mattresses/01/3-3.png",
                            description:
                                "LANGA Стоун – (stone – пер. Камень) – Крепкий, жесткий как настоящий камешек, матрас создан не для неженок!)) Блок независимых пружин с обеих сторон «в плену» 3-х сантиметрового кокоса. И только слои мебеллина поверх койры немножко смягчают поистине суровое наполнение матраса LANGA Стоун.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "20 100",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "24 600",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "27 620",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "30 600",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "33 500",
                                },
                                {
                                    size: "200х200",
                                    price: "36 500",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Мебелин 10 мм",
                                        "Кокосовая койра 30 мм",
                                        "Войлок 10 мм",
                                        "Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок 10 мм",
                                        "Кокосовая койра 30 мм",
                                        "Мебелин 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Двойной жаккард"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Титан",
                            img: "/publicImg/mattresses/01/3-4.png",
                            description:
                                "LANGA Титан – матрас, оправдывающий своё название! Эксклюзивная модель, выдерживающая очень большой вес : 140-150 кг на спальное место. Несущая система матраса- чередование независимых пружин и блоков пенополиуретана высокой плотности. При этом LANGA Титан имеет разные стороны по жесткости. Мощный, высокий красавец Титан понравится как любителям отдыхать на жестком матрасе, так и людям с большим весом.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "24 150",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "29 750",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "33 690",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "37 450",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "41 180",
                                },
                                {
                                    size: "200х200",
                                    price: "44 960",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 29 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 7-ми зонный 30 мм",
                                        "Холкон 20 мм",
                                        "Сизаль 10 мм",
                                        "Войлок 10 мм",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок 10 мм",
                                        "Кокосовая койра 30 мм",
                                        "Мебелин 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Трикотаж"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Фантазия",
                            img: "/publicImg/mattresses/01/3-5.png",
                            description:
                                "Матрас по сути служит основой для топпера, который крепится к своему основанию-матрасу посредством липучек. Несущая система матраса-основы – это независимый пружинный блок (256 пруж. на м. кв.), поверх которого расположен войлок и пенополиуретан толщиной 1 см. Наполнение топпера может быть любое: меморикс, латекс, холкон или комбинированное (рекомендуем с мягкими наполнителями использовать слой мебелина под наполнитель). И еще одна интересная немаловажная деталь: черный чехол матраса-основы, выполненного из инновационного материала 3D-сетки, внизу на молнии. Его можно снять и постирать при невысокой температуре (до 30 градусов). Яркая, строгая и одновременно игривая, Ланга Фантазия с наполнением топпера из желаемого материала может стать воплощением мечты!!!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 760",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "19 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "21 940",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "23 990",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "25 990",
                                },
                                {
                                    size: "200х200",
                                    price: "27 980",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 18-21 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Синтепон 100 гр",
                                        "Пенополиуретан 50 мм",
                                        "Пенополиуретан 10 мм",
                                        "Войлок 10 мм",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок 10 мм",
                                    ],
                                },
                                {
                                    title: "Топпер",
                                    values: ["Трикотаж"],
                                },
                                {
                                    title: "Матрас",
                                    values: ["Ткань сетчатая 3D на молнии"],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Флагман",
                            img: "/publicImg/mattresses/01/3-6.png",
                            description:
                                "Матрас Флагман – изысканная составляющая не только Вашей спальни, но и Вашего комфорта… Односторонний матрас, изготовленный на двойном пружинном блоке с использованием натурального латекса и высокоэластичной пены. В технологии изготовления используется ручная вязка матраса для придания комфортности верхних слоев и улучшения экологической составляющей, что немаловажно для здоровья человека. Чехол матраса имеет вставку по всему периметру матраса из воздухопроницаемой, современной ткани с 3D-эффектом, которая способствует более эффективной циркуляции воздуха внутри матраса. Чехол Silver Relax простеган на 500 гр. Холконе (в 2 слоя по 250 гр) и 16 мм пенополиуретана! Данное исполнение чехла матраса Флагман усиливает эргономические свойства матраса, адаптируя его под анатомические изгибы тела, благотворно влияя на кровеносную систему организма!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "45 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "55 800",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "63 000",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "70 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "77 000",
                                },
                                {
                                    size: "200х200",
                                    price: "84 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 36 см",
                                        "Нагрузка: без ограничений на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 7-ми зон. 30 мм",
                                        "Латекс 30 мм",
                                        "Геотекстиль",
                                        "Независимый пружинный блок «TFK 512 пр./м2» 7-ми зон. (h = 65 мм)",
                                        "Геотекстиль",
                                        "Пенополиуретан 10 мм",
                                        "Геотекстиль",
                                        "Независимый пружинный блок «TFK 512 пр./м2» 7-ми зон. (h = 140 мм)",
                                        "Геотекстиль",
                                        "Пенополиуретан 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стеганый на 500 гр. холкон + Пенополиуретан 16 мм",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Фреш",
                            img: "/publicImg/mattresses/01/3-7.png",
                            description:
                                "LANGA Фреш – поистине свежее решение! Поверх блока из Пенополиуретана высотой 14 см мы разместили комфортный слой мягкого меморикса-алоэ. Нежный комфорт матраса дополняет новый чехол из трикотажа, стеганого на 300 гр. холконе. Надежный, красивый матрас с ярко выраженными анатомическими свойствами порадует владельцев любой возрастной категории!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "21 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "26 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "30 300",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "33 700",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "37 000",
                                },
                                {
                                    size: "200х200",
                                    price: "40 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Меморикс алоэ 40 мм",
                                        "Пенополиуретан 140 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж стег. на 300 гр. хол + 8 мм ППУ",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "МАТРАС LANGA Эффект",
                            img: "/publicImg/mattresses/01/3-8.png",
                            description:
                                "LANGA Эффект – абсолютно новое решение в матрасном производстве! Матрас, изготовленный в плотной черной ткани–«рогожке». Изюминкой матраса является полностью съемный белый верх из непромокаемого трикотажа с эффектом микро-массажа. LANGA Эффект – односторонняя модель с элитным наполнением на независимом пружинном блоке. Супружеские пары с существенной разницей в весе одинаково комфортно чувствуют себя на этом матрасе. Эффект уравновешивания и внешний, строгий, черно-белый вид полностью оправдывают название этого матраса линейки LANGA. Подарите себе этот практичный, безупречно комфортный матрас LANGA Эффект.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "27 000",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "33 000",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "37 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "41 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "45 200",
                                },
                                {
                                    size: "200х200",
                                    price: "49 100",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 24 см",
                                        "Нагрузка: до 150 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Холкон 20 мм",
                                        "Латекс 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2»",
                                        "Войлок",
                                        "Кокосовая койра 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж водонепроницаемый, съёмный, на молнии по периметру с одной стороны + Рогожка",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 65,
                    title: "Дачные",
                    img: "/publicImg/mattresses/02/1-0.png",
                    category: "mattresses",
                    variants: [
                        {
                            title: "Матрас эконом комфорт",
                            img: "/publicImg/mattresses/02/1-1.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "12 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "14 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "15 700",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "17 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "18 500",
                                },
                                {
                                    size: "200х200",
                                    price: "19 900",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 19 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 210 пр./м2”",
                                        "Войлок",
                                        "Пенополиуретан 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас эконом плюс",
                            img: "/publicImg/mattresses/02/1-2.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "12 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "14 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "15 700",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "17 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "18 500",
                                },
                                {
                                    size: "200х200",
                                    price: "19 900",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 17 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Мебелин 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 210 пр./м2”",
                                        "Войлок",
                                        "Мебелин 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 66,
                    title: "Классика",
                    img: "/publicImg/mattresses/03/1-0.png",
                    category: "mattresses",
                    variants: [
                        {
                            title: "Матрас Дуэт-Н",
                            img: "/publicImg/mattresses/03/1-1.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 900",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "20 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "21 700",
                                },
                                {
                                    size: "200х200",
                                    price: "23 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Спанбонд",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "СпанбондБ",
                                        "Кокосовая койра 10 мм",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Аврора-Н",
                            img: "/publicImg/mattresses/03/1-2.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 100",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 800",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "21 500",
                                },
                                {
                                    size: "200х200",
                                    price: "23 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 22 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Войлок",
                                        "Пенополиуретан 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Пенополиуретан 10 мм",
                                        "Войлок",
                                        "Пенополиуретан 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Идеал-Н",
                            img: "/publicImg/mattresses/03/1-3.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 800",
                                },
                                {
                                    size: "200х200",
                                    price: "22 500",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Импульс-Н",
                            img: "/publicImg/mattresses/03/1-4.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 000",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "17 100",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 500",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "20 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "22 100",
                                },
                                {
                                    size: "200х200",
                                    price: "23 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 22 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Ария-Н",
                            img: "/publicImg/mattresses/03/1-5.png",
                            description:
                                "Бюджетная, всеми любимая, линейка матрасов с ортопедическим эффектом сегодня пополняется новой интересной моделью Ария-Н. Не матрас, а просто песня!)) Стороны матраса имеют разную жесткость, в связи с чем данная модель может использоваться в вариации зима-лето. Одним из значимых преимуществ этого матраса является наличие в нем латекса с одной стороны, что улучшает качественные характеристики, добавляет комфорт и уют данной стороне и всему матрасу в целом. Несмотря на свою новизну, Ария-Н весьма быстро обретает популярность среди ценителей недорогих ортопедических матрасов, красивых внешне и с качественной начинкой внутри. А вот чехол этой модели выгодно выделяет этот матрас из всей линейки: верх и низ исполнены в белоснежном двойном жаккарде с весьма пышной (250 гр.холкона) стежкой. А бурлетная часть – строгая черная ткань трикотаж-рогожка. Одним словом – Вы не останетесь равнодушны!",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 500",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "19 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "22 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "24 500",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "26 700",
                                },
                                {
                                    size: "200х200",
                                    price: "29 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 22 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс перфорированный 10 мм",
                                        "Пенополиуретан 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Кокосовая койра латексированная 10 мм",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Двойной жаккард со стежкой (250 гр.холкона), бурлет – трикотаж-рогожка",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Матрас Аскент-Н",
                            img: "/publicImg/mattresses/03/1-6.png",
                            description:
                                "Оригинальный матрас с разными сторонами по жесткости, красивый новый чехол, очень доступная цена – то, что Вам сейчас надо! Аскет-Н – комфортный матрас с жесткостью выше среднего, но при этом весьма уютный для людей в любом весе. Яркий ортопедический эффект матраса прекрасно дополняет новое исполнение чехла повышенной комфортности. Нежный трикотаж, простеган на 250 гр. холконе, что делает внешний вид матраса привлекательным, а светло-серая рогожка бурлета благородно подчеркивает изысканность и стиль новой модели.",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "15 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "18 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "21 100",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "23 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "25 300",
                                },
                                {
                                    size: "200х200",
                                    price: "27 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 10 мм",
                                        "Войлок",
                                        "Пенополиуретан 10 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Войлок",
                                        "Холкон 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Трикотаж (новый «крылья») со стежкой (250 гр.холкона), бурлет – рогожка серая (новая)",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Матрас Классик-Н",
                            img: "/publicImg/mattresses/03/1-7.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 100",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 600",
                                },
                                {
                                    size: "200х200",
                                    price: "22 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 30 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Пенополиуретан 30 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Кокос-Н",
                            img: "/publicImg/mattresses/03/1-8.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 200",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "17 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "20 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "22 200",
                                },
                                {
                                    size: "200х200",
                                    price: "24 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 19 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Кокосовая койра 20 мм",
                                        "Спанбонд",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Кокосовая койра 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Комфорт-Н",
                            img: "/publicImg/mattresses/03/1-9.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "12 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "15 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "16 500",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "18 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "19 500",
                                },
                                {
                                    size: "200х200",
                                    price: "21 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Люкс-Н",
                            img: "/publicImg/mattresses/03/2-0.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 200",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "17 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "18 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "20 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "22 300",
                                },
                                {
                                    size: "200х200",
                                    price: "24 100",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 23 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 40 мм",
                                        "Спанбонд",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Пенополиуретан 40 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Престиж-Н",
                            img: "/publicImg/mattresses/03/2-1.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "18 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "19 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "21 600",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "23 500",
                                },
                                {
                                    size: "200х200",
                                    price: "25 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 24 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 30 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 30 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Прима-Н",
                            img: "/publicImg/mattresses/03/2-2.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 500",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 800",
                                },
                                {
                                    size: "200х200",
                                    price: "22 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Релакс-Н",
                            img: "/publicImg/mattresses/03/2-3.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "17 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "21 600",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "23 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "26 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "28 600",
                                },
                                {
                                    size: "200х200",
                                    price: "31 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Спанбонд",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Кокосовая койра 10 мм",
                                        "Латекс 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Софт-Н",
                            img: "/publicImg/mattresses/03/2-4.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 400",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 600",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 900",
                                },
                                {
                                    size: "200х200",
                                    price: "22 600",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 22 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 30 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Войлок",
                                        "Холкон 30 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Фортуна-Н",
                            img: "/publicImg/mattresses/03/2-5.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 100",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 300",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 000",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 600",
                                },
                                {
                                    size: "200х200",
                                    price: "22 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Кокосовая койра 10 мм",
                                        "Пенополиуретан 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Экзотика-Н",
                            img: "/publicImg/mattresses/03/2-6.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "13 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "16 200",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "17 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "19 100",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "20 700",
                                },
                                {
                                    size: "200х200",
                                    price: "22 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 22 см",
                                        "Нагрузка: до 120 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Элит-Н",
                            img: "/publicImg/mattresses/03/2-7.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "14 900",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "18 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "19 900",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "21 900",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "23 900",
                                },
                                {
                                    size: "200х200",
                                    price: "25 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 110 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Войлок",
                                        "Независимый пружинный блок “TFK 256 пр./м2”",
                                        "Спанбонд",
                                        "Кокосовая койра 10 мм",
                                        "Латекс 20 мм",
                                        "Усиление периметра",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 67,
                    title: "Малыш",
                    img: "/publicImg/mattresses/04/1-0.png",
                    category: "mattresses",
                    variants: [
                        {
                            title: "Матрас Малыш Комфорт",
                            img: "/publicImg/mattresses/04/1-1.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "8 200",
                                },
                                {
                                    size: "60х140",
                                    price: "8 500",
                                },
                                {
                                    size: "60х160",
                                    price: "9 600",
                                },
                                {
                                    size: "60х180",
                                    price: "9 800",
                                },
                                {
                                    size: "70х120",
                                    price: "8 700",
                                },
                                {
                                    size: "70х140",
                                    price: "9 000",
                                },
                                {
                                    size: "70х160",
                                    price: "10 200",
                                },
                                {
                                    size: "70х180",
                                    price: "10 700",
                                },
                                {
                                    size: "80х180",
                                    price: "11 600",
                                },
                                {
                                    size: "90х190",
                                    price: "12 300",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 18 см",
                                        "Нагрузка: до 80 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Холкон 20 мм",
                                        "Войлок",
                                        "Спанбонд",
                                        "Зависимый пружинный блок «Боннель»",
                                        "Спанбонд",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Кроха",
                            img: "/publicImg/mattresses/04/1-2.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "8 300",
                                },
                                {
                                    size: "60х140",
                                    price: "8 400",
                                },
                                {
                                    size: "60х160",
                                    price: "9 800",
                                },
                                {
                                    size: "60х180",
                                    price: "9 900",
                                },
                                {
                                    size: "70х120",
                                    price: "8 800",
                                },
                                {
                                    size: "70х140",
                                    price: "8 900",
                                },
                                {
                                    size: "70х160",
                                    price: "10 400",
                                },
                                {
                                    size: "70х180",
                                    price: "10 500",
                                },
                                {
                                    size: "80х180",
                                    price: "11 300",
                                },
                                {
                                    size: "90х190",
                                    price: "12 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 8 см",
                                        "Нагрузка: до 80 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 60 мм",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Кузя",
                            img: "/publicImg/mattresses/04/1-3.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "9 700",
                                },
                                {
                                    size: "60х140",
                                    price: "9 900",
                                },
                                {
                                    size: "60х160",
                                    price: "11 100",
                                },
                                {
                                    size: "60х180",
                                    price: "11 300",
                                },
                                {
                                    size: "70х120",
                                    price: "10 500",
                                },
                                {
                                    size: "70х140",
                                    price: "10 700",
                                },
                                {
                                    size: "70х160",
                                    price: "12 100",
                                },
                                {
                                    size: "70х180",
                                    price: "12 100",
                                },
                                {
                                    size: "80х180",
                                    price: "13 300",
                                },
                                {
                                    size: "90х190",
                                    price: "14 300",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 12 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок",
                                        "Пенополиуретан 10 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Langa",
                            img: "/publicImg/mattresses/04/1-4.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "8 500",
                                },
                                {
                                    size: "60х140",
                                    price: "8 600",
                                },
                                {
                                    size: "60х160",
                                    price: "10 000",
                                },
                                {
                                    size: "60х180",
                                    price: "10 100",
                                },
                                {
                                    size: "70х120",
                                    price: "8 900",
                                },
                                {
                                    size: "70х140",
                                    price: "9 100",
                                },
                                {
                                    size: "70х160",
                                    price: "10 700",
                                },
                                {
                                    size: "70х180",
                                    price: "10 800",
                                },
                                {
                                    size: "80х180",
                                    price: "11 400",
                                },
                                {
                                    size: "90х190",
                                    price: "12 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 9 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Кокосовая койра 10 мм",
                                        "Холкон 20 мм",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 40 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый трикотаж"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Люкс",
                            img: "/publicImg/mattresses/04/1-5.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "8 000",
                                },
                                {
                                    size: "60х140",
                                    price: "8 800",
                                },
                                {
                                    size: "60х160",
                                    price: "10 000",
                                },
                                {
                                    size: "60х180",
                                    price: "10 300",
                                },
                                {
                                    size: "70х120",
                                    price: "9 100",
                                },
                                {
                                    size: "70х140",
                                    price: "9 400",
                                },
                                {
                                    size: "70х160",
                                    price: "10 700",
                                },
                                {
                                    size: "70х180",
                                    price: "11 200",
                                },
                                {
                                    size: "80х180",
                                    price: "12 100",
                                },
                                {
                                    size: "90х190",
                                    price: "12 900",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 17 см",
                                        "Нагрузка: до 80 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Спанбонд",
                                        "Зависимый пружинный блок «Боннель»",
                                        "Спанбонд",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Масяня",
                            img: "/publicImg/mattresses/04/1-6.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "9 100",
                                },
                                {
                                    size: "60х140",
                                    price: "9 200",
                                },
                                {
                                    size: "60х160",
                                    price: "10 400",
                                },
                                {
                                    size: "60х180",
                                    price: "10 400",
                                },
                                {
                                    size: "70х120",
                                    price: "10 300",
                                },
                                {
                                    size: "70х140",
                                    price: "10 400",
                                },
                                {
                                    size: "70х160",
                                    price: "11 700",
                                },
                                {
                                    size: "70х180",
                                    price: "11 800",
                                },
                                {
                                    size: "80х180",
                                    price: "12 200",
                                },
                                {
                                    size: "90х190",
                                    price: "12 700",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 11 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Холкон 20 мм",
                                        "Пенополиуретан 60 мм",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 20 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Стандарт",
                            img: "/publicImg/mattresses/04/1-7.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "8 100",
                                },
                                {
                                    size: "60х140",
                                    price: "8 200",
                                },
                                {
                                    size: "60х160",
                                    price: "9 200",
                                },
                                {
                                    size: "60х180",
                                    price: "9 300",
                                },
                                {
                                    size: "70х120",
                                    price: "8 600",
                                },
                                {
                                    size: "70х140",
                                    price: "8 700",
                                },
                                {
                                    size: "70х160",
                                    price: "9 800",
                                },
                                {
                                    size: "70х180",
                                    price: "9 900",
                                },
                                {
                                    size: "80х180",
                                    price: "10 400",
                                },
                                {
                                    size: "90х190",
                                    price: "11 100",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 8 см",
                                        "Нагрузка: до 60 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Холкон 80 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Тотошка",
                            img: "/publicImg/mattresses/04/1-8.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "9 500",
                                },
                                {
                                    size: "60х140",
                                    price: "9 700",
                                },
                                {
                                    size: "60х160",
                                    price: "11 100",
                                },
                                {
                                    size: "60х180",
                                    price: "11 300",
                                },
                                {
                                    size: "70х120",
                                    price: "10 200",
                                },
                                {
                                    size: "70х140",
                                    price: "10 400",
                                },
                                {
                                    size: "70х160",
                                    price: "12 000",
                                },
                                {
                                    size: "70х180",
                                    price: "12 200",
                                },
                                {
                                    size: "80х180",
                                    price: "13 300",
                                },
                                {
                                    size: "90х190",
                                    price: "14 300",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 11 см",
                                        "Нагрузка: до 90 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Спанбонд",
                                        "Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Спанбонд",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Малыш Фунтик",
                            img: "/publicImg/mattresses/04/1-9.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "60х120",
                                    price: "9 700",
                                },
                                {
                                    size: "60х140",
                                    price: "9 900",
                                },
                                {
                                    size: "60х160",
                                    price: "11 400",
                                },
                                {
                                    size: "60х180",
                                    price: "11 600",
                                },
                                {
                                    size: "70х120",
                                    price: "10 500",
                                },
                                {
                                    size: "70х140",
                                    price: "10 700",
                                },
                                {
                                    size: "70х160",
                                    price: "12 300",
                                },
                                {
                                    size: "70х180",
                                    price: "12 500",
                                },
                                {
                                    size: "80х180",
                                    price: "13 500",
                                },
                                {
                                    size: "90х190",
                                    price: "14 700",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 11 см",
                                        "Нагрузка: до 100 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Войлок",
                                        "Независимый пружинный блок «TFK 256 пр./м2» (h=80 мм)",
                                        "Войлок",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 68,
                    title: "Сэндвич",
                    img: "/publicImg/mattresses/05/1-0.png",
                    category: "mattresses",
                    variants: [
                        {
                            title: "Матрас Комби-кокос",
                            img: "/publicImg/mattresses/05/1-1.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "16 300",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "19 700",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "22 000",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "24 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "28 700",
                                },
                                {
                                    size: "200х200",
                                    price: "29 000",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 20 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Пенополиуретан 40 мм",
                                        "Кокосовая койра 30 мм",
                                        "Пенополиуретан 40 мм",
                                        "Кокосовая койра 30 мм",
                                        "Пенополиуретан 40 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Комби-макси",
                            img: "/publicImg/mattresses/05/1-2.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "21 900",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "27 100",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "30 700",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "34 300",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "37 900",
                                },
                                {
                                    size: "200х200",
                                    price: "41 400",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 19 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Пенополиуретан 120 мм",
                                        "Латекс 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Микс кокос",
                            img: "/publicImg/mattresses/05/1-3.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "18 800",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "23 100",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "25 900",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "28 600",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "31 400",
                                },
                                {
                                    size: "200х200",
                                    price: "34 200",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 21 см",
                                        "Нагрузка: без ограничений на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Пенополиуретан 30 мм",
                                        "Кокосовая койра 30 мм",
                                        "Пенополиуретан 30 мм",
                                        "Кокосовая койра 30 мм",
                                        "Пенополиуретан 30 мм",
                                        "Кокосовая койра 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: [
                                        "Двойной жаккард, стеганый на холконе",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Матрас Макси",
                            img: "/publicImg/mattresses/05/1-4.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "24 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "31 000",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "35 200",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "39 400",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "43 600",
                                },
                                {
                                    size: "200х200",
                                    price: "47 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 18 см",
                                        "Нагрузка: до 110 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 60 мм",
                                        "Холкон 60 мм",
                                        "Латекс 60 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Стиль",
                            img: "/publicImg/mattresses/05/1-5.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "26 600",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "33 400",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "38 000",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "42 500",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "47 000",
                                },
                                {
                                    size: "200х200",
                                    price: "51 600",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 18 см",
                                        "Нагрузка: до 140 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Латекс 30 мм",
                                        "Кокосовая койра 120 мм",
                                        "Латекс 30 мм",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Стеганый хлопковый жаккард"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Тима1",
                            img: "/publicImg/mattresses/05/1-6.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "10 200",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "11 900",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "13 100",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "14 200",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "15 600",
                                },
                                {
                                    size: "200х200",
                                    price: "16 800",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 18 см",
                                        "Нагрузка: до 130 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый Пенополиуретан 180 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                        {
                            title: "Матрас Тонус-плюс",
                            img: "/publicImg/mattresses/05/1-7.png",
                            description: "",
                            size_chart: [
                                {
                                    size: "90х190/90х200",
                                    price: "10 700",
                                },
                                {
                                    size: "120х190/120х200",
                                    price: "12 300",
                                },
                                {
                                    size: "140х190/140х200",
                                    price: "13 400",
                                },
                                {
                                    size: "160х190/160х200",
                                    price: "14 500",
                                },
                                {
                                    size: "180х190/180х200",
                                    price: "15 800",
                                },
                                {
                                    size: "200х200",
                                    price: "16 900",
                                },
                            ],
                            info: [
                                {
                                    title: "Характеристики",
                                    values: [
                                        "Высота матраса: 8 см",
                                        "Нагрузка: до 80 кг на 1 сп. место",
                                    ],
                                },
                                {
                                    title: "Состав",
                                    values: [
                                        "Ватин хлопковый",
                                        "Кокосовая койра 10 мм",
                                        "Холкон 60 мм",
                                        "Кокосовая койра 10 мм",
                                        "Ватин хлопковый",
                                    ],
                                },
                                {
                                    title: "Чехол",
                                    values: ["Поликоттон"],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        categories: [
            {
                title: "Встроенная мебель",
                img: "/publicImg/vstroennaya/vstroennaya.jpg.webp",
                route: "/vstroennaya",
                type: "category",
            },
            {
                title: "Мебель на заказ",
                img: "/publicImg/nazakaz/nazakaz.jpg.webp",
                route: "/nazakaz",
                type: "category",
            },
            {
                title: "Гардеробная",
                img: "/publicImg/garderobnaya/garderob.jpg.webp",
                route: "/garderobnaya",
                type: "category",
            },
            {
                title: "Шкафы-купе",
                img: "/publicImg/kupe/kupe.jpg.webp",
                route: "/kupe",
                type: "category",
            },
            {
                title: "Шкафы распашные",
                img: "/publicImg/kupe/109/1-0.jpg.webp",
                route: "/swing",
                type: "category",
            },
            {
                title: "Кухни",
                img: "/publicImg/kuhni/kuhni.jpg.webp",
                route: "/kuhni",
                type: "category",
            },
        ],
        materials: [
            {
                title: "Ведущая австрийская компания по производству ЛДСП",
                short_title: "EEGGER",
                img: "/publicImg/materials/EEGGER.png",
            },
            {
                title: "Продукция для кухни современного европейского уровня качества",
                short_title: "AMK ТРОЯ",
                img: "/publicImg/materials/amk.png",
            },
            {
                title: "Мойки, которые не требуют сложного ухода",
                short_title: "Grand Fest",
                img: "/publicImg/materials/grandfest.png",
            },
            {
                title: "Один из лидеров рынка мебельной фурнитуры",
                short_title: "Boyard",
                img: "/publicImg/materials/Boyard.png",
            },
            {
                title: "Один из самых крупных производителей мебельных фасадов в мире",
                short_title: "AGT",
                img: "/publicImg/materials/agt.png",
            },
            {
                title: "Высококачественная австрийская фурнитура для современной мебели",
                short_title: "Blum",
                img: "/publicImg/materials/blum.png",
            },
            {
                title: "Крупнейший бренд искусственного камня",
                short_title: "Tristone",
                img: "/publicImg/materials/tristone.jpg.webp",
            },
            {
                title: "Мебельная фурнитура и комплектующие из Германии",
                short_title: "Rehau",
                img: "/publicImg/materials/Rehau.png",
            },
            {
                title: "Ведущий поставщик и производитель комплектующих для шкафов-купе",
                short_title: "Aristo",
                img: "/publicImg/materials/Aristo.png",
            },
        ],
        certificates: [
            "/publicImg/sertificates/Screenshot_1.webp",
            "/publicImg/sertificates/Screenshot_2.webp",
            "/publicImg/sertificates/Screenshot_3.webp",
            "/publicImg/sertificates/Screenshot_4.webp",
            "/publicImg/sertificates/Screenshot_5.webp",
            "/publicImg/sertificates/Screenshot_6.webp",
            "/publicImg/sertificates/Screenshot_7.webp",
            "/publicImg/sertificates/Screenshot_8.webp",
            "/publicImg/sertificates/Screenshot_9.webp",
            "/publicImg/sertificates/Screenshot_10.webp",
            "/publicImg/sertificates/Screenshot_11.webp",
        ],
        videos: [
            "https://www.youtube.com/embed/xhdOdr-YoA8",
            "https://www.youtube.com/embed/j2xDhYbBUyI",
            "https://www.youtube.com/embed/egM069KD73c",
            "https://www.youtube.com/embed/_stiEnoAses",
            "https://www.youtube.com/embed/Uyr4oeFGdz4",
            "https://www.youtube.com/embed/lLRjy28ceBM",
            "https://www.youtube.com/embed/M256Lfjcl6M",
            "https://www.youtube.com/embed/o9oBowJ6dxw",
            "https://www.youtube.com/embed/l_t22ijh38Y",
            "https://www.youtube.com/embed/_stiEnoAses",
            "https://www.youtube.com/embed/qKvb_Pv7tqM",
        ],
    },
    getters: {
        getProductsByCategory: (state) => (category) => {
            return state.products[category];
        },
        // PARAMS TO THIS GETTER NEED OBJECT
        getProductByCategoryAndId:
            (state) =>
            ({ category, id }) => {
                let products = state.products[category] ?? [];
                if (products.length === 0) {
                    router.push({ name: "Index" });
                    return;
                } else {
                    return products.filter(
                        (product) => product.id === parseInt(id)
                    )[0];
                }
            },
    },
    mutations: {},
    actions: {},
    modules: {},
});
