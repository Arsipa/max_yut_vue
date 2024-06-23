import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
// import store from "../store/index.js";

const routes = [
    {
        path: "/:pathMatch(.*)",
        redirect: { name: "Index" },
    },
    {
        path: "/index",
        redirect: { name: "Index" },
    },
    {
        path: "/",
        name: "Index",
        component: Index,
        meta: {
            title : "Максимум УЮТ",
            description : "Мебельный магазин предлагает широкий ассортимент высококачественных товаров для создания уюта и комфорта в вашем доме. У нас вы найдёте стильную и функциональную мебель. Мы предлагаем выгодные цены, удобные способы оплаты и доставку.",
        },
    },
    {
        path: "/vstroennaya",
        name: "Vstroennaya",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Встроенная мебель",
            img: "/publicImg/previewSections/vstroennaya.jpg.webp",
            category: "vstroennaya",
        },
        meta: {
            title : "Встроенная мебель",
            description : "Встроенная мебель: идеальное решение для вашего интерьера. Широкий выбор, высокое качество, доступные цены.",
        },
    },
    {
        path: "/nazakaz",
        name: "Nazakaz",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Мебель на заказ",
            img: "/publicImg/previewSections/nazakaz.jpg.webp",
            category: "nazakaz",
        },
        meta: {
            title : "Мебель на заказ",
            description : "Создайте неповторимый интерьер с учётом ваших предпочтений. Профессиональный подход, качественные материалы. Обращайтесь!",
        },
    },
    {
        path: "/garderobnaya",
        name: "Garderobnaya",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Гардеробная на заказ",
            img: "/publicImg/previewSections/garderobnaya.jpg.webp",
            category: "garderobnaya",
        },
        meta: {
            title : "Гардеробная на заказ",
            description : "Создайте идеальное пространство для хранения одежды и аксессуаров. Профессиональный подход, качественные материалы.",
        },
    },
    {
        path: "/kupe",
        name: "Kupe",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Шкафы-купе на заказ",
            img: "/publicImg/previewSections/kupe.jpg.webp",
            category: "kupe",
        },
        meta: {
            title : "Шкафы-купе на заказ",
            description : "Элегантное и функциональное решение для вашего интерьера. Огромный выбор, высокое качество, доступные цены.",
        },
    },
    {
        path: "/swing",
        name: "Swing",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Шкафы распашные на заказ",
            img: "/publicImg/previewSections/swing.jpg.webp",
            category: "swing",
        },
        meta: {
            title : "Шкафы распашные на заказ",
            description : "Создайте уникальный интерьер с помощью наших качественных и стильных шкафов. Профессиональный подход, доступные цены.",
        },
    },
    {
        path: "/kuhni",
        name: "Kuhni",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Кухонный гарнитур",
            img: "/publicImg/previewSections/kuhni.jpg.webp",
            category: "kuhni",
        },
        meta: {
            title : "Кухонный гарнитур",
            description : "Идеальное решение для вашей кухни. Стильные фасады, эргономичные ящики, высококачественные материалы",
        },
    },
    {
        path: "/videos",
        name: "Videos",
        component: () => import("../views/Videos.vue"),
        meta: {
            title : "Видео",
            description : "На этой странице вы найдёте самые интересные и популярные видео нашего личного ютуб канала",
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: {
            title : "О нас",
            description : "Узнайте больше о нашей компании и условиях!",
        },
    },
    {
        path: "/promo",
        name: "Promo",
        component: () => import("../views/Promo.vue"),
        meta: {
            title : "Акции",
            description : "Ознакомьтесь с нашими акциями! Найдите выгодные предложения, скидки и специальные условия для вас. Покупайте с удовольствием и экономьте вместе с нами!",
        },
    },
    {
        path: "/reviews",
        name: "Reviews",
        component: () => import("../views/Reviews.vue"),
        meta: {
            title : "Отзывы",
            description : "Довольные покупатели рекомендуют нас друзьям и знакомым. Узнайте истории успеха и убедитесь в качестве наших услуг и товаров!",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: "smooth",
                    });
                }, 500);
            });
        }
        return { top: 0, behavior: "smooth" };
    },
});

router.beforeEach((toRoute,fromRoute,next) => {
    window.document.title = toRoute.meta.title;
    window.document.querySelector("[name=description]").setAttribute('content', toRoute.meta.description)
    next();
 })

export default router;
