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
            img: "/publicImg/previewSections/vstroennaya.jpg.webp",
            category: "vstroennaya",
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
    },
    {
        path: "/kuhni",
        name: "Kuhni",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Кухни",
            img: "/publicImg/previewSections/kuhni.jpg.webp",
            category: "kuhni",
        },
    },
    {
        path: "/mattresses",
        name: "Mattresses",
        component: () => import("../views/Products.vue"),
        props: {
            title: "Матрасы",
            img: "/publicImg/previewSections/mattresses.jpg.webp",
            category: "mattresses",
        },
    },
    {
        path: "/mattresses/:id",
        name: "MattressDetails",
        component: () => import("../views/MattressDetails.vue"),
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
    {
        path: "/reviews",
        name: "Reviews",
        component: () => import("../views/Reviews.vue"),
    },
    {
        path: "/credit",
        name: "Credit",
        component: () => import("../views/Credit.vue"),
    },
    // {
    //     path: "/calculator",
    //     name: "Calculator",
    //     component: () => import("../views/Calculator.vue"),
    // },
    // {
    //     path: "/3d",
    //     name: "3d",
    //     component: () => import("../views/3d.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(),
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
