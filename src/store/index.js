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
                img: "/publicImg/materials/EEGGER.png.webp",
            },
            {
                title: "Продукция для кухни современного европейского уровня качества",
                short_title: "AMK ТРОЯ",
                img: "/publicImg/materials/amk.png.webp",
            },
            {
                title: "Мойки, которые не требуют сложного ухода",
                short_title: "Grand Fest",
                img: "/publicImg/materials/grandfest.png.webp",
            },
            {
                title: "Один из лидеров рынка мебельной фурнитуры",
                short_title: "Boyard",
                img: "/publicImg/materials/Boyard.png.webp",
            },
            {
                title: "Один из самых крупных производителей мебельных фасадов в мире",
                short_title: "AGT",
                img: "/publicImg/materials/agt.png.webp",
            },
            {
                title: "Высококачественная австрийская фурнитура для современной мебели",
                short_title: "Blum",
                img: "/publicImg/materials/blum.png.webp",
            },
            {
                title: "Крупнейший бренд искусственного камня",
                short_title: "Tristone",
                img: "/publicImg/materials/tristone.jpg.webp",
            },
            {
                title: "Мебельная фурнитура и комплектующие из Германии",
                short_title: "Rehau",
                img: "/publicImg/materials/Rehau.png.webp",
            },
            {
                title: "Ведущий поставщик и производитель комплектующих для шкафов-купе",
                short_title: "Aristo",
                img: "/publicImg/materials/Aristo.png.webp",
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
