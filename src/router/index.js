import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import store from "../store/index.js";

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
    },
    {
        path: "/vstroennaya",
        name: "Vstroennaya",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Встроенная мебель",
            img: "/publicImg/previewSections/vstroennaya.jpg",
            category: "vstroennaya",
        },
    },
    {
        path: "/nazakaz",
        name: "Nazakaz",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Мебель на заказ",
            img: "/publicImg/previewSections/nazakaz.jpg",
            category: "nazakaz",
        },
    },
    {
        path: "/garderobnaya",
        name: "Garderobnaya",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Гардеробная на заказ",
            img: "/publicImg/previewSections/garderobnaya.jpg",
            category: "garderobnaya",
        },
    },
    {
        path: "/kupe",
        name: "Kupe",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Шкафы-купе на заказ",
            img: "/publicImg/previewSections/kupe.jpg",
            category: "kupe",
        },
    },
    {
        path: "/swing",
        name: "Swing",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Шкафы распашные на заказ",
            img: "/publicImg/previewSections/swing.jpg",
            category: "swing",
        },
    },
    {
        path: "/kuhni",
        name: "Kuhni",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Кухни",
            img: "/publicImg/previewSections/kuhni.jpg",
            category: "kuhni",
        },
    },
    {
        path: "/:category/:id",
        name: "ProductDetails",
        component: () => import("../views/ProductDetails.vue"),
    },
    {
        path: "/videos",
        name: "Videos",
        component: () => import("../views/Videos.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/promo",
        name: "Promo",
        component: () => import("../views/Promo.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return window.scrollTo({
                top: document.querySelector(to.hash).offsetTop,
                behavior: "smooth",
            });
        } else {
            return { top: 0 };
        }
    },
});

router.beforeEach((to, from) => {
    if (to?.params?.category) {
        let [category, id] = [to.params.category, to.params.id];
        let product = store.getters.getProductByCategoryAndId({
            category: category,
            id: id,
        });
        if (product === undefined) {
            alert("Такого товара не существует(");
            return { name: "Index" };
        }
    }
});

export default router;
