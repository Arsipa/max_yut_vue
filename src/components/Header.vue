<template>
    <header>
        <div class="header__top">
            <div class="container header__top-inner">
                <router-link
                    :to="{ name: 'Index', hash: '#form' }"
                    class="dotted">
                    <img src="@/assets/img/stock/phone.svg" alt="" />
                    <span>Заказать звонок</span>
                </router-link>
                <router-link
                    :to="{ name: 'About', hash: '#measuring' }"
                    class="item">
                    <img src="@/assets/img/stock/tape.svg" alt="" />
                    <span>Замер</span>
                </router-link>
                <router-link
                    :to="{ name: 'About', hash: '#delivery' }"
                    class="item">
                    <img src="@/assets/img/stock/delivery.svg" alt="" />
                    <span>Доставка</span>
                </router-link>
                <router-link
                    :to="{ name: 'About', hash: '#montage' }"
                    class="item">
                    <img src="@/assets/img/stock/wrench.svg" alt="" />
                    <span>Монтаж</span>
                </router-link>
                <!-- <router-link :to="{ name: 'Calculator' }" class="item">
                    <img src="@/assets/img/stock/calc.svg" alt="" />
                    <span>Калькулятор</span>
                </router-link> -->
                <router-link :to="{ name: '3d' }">
                    <img src="@/assets/img/stock/3d.svg" alt="" />
                    <span>3D проект</span>
                </router-link>
            </div>
        </div>
        <div class="header__middle bordered">
            <div class="header__middle-inner container">
                <router-link :to="{ name: 'Index' }"
                    ><img src="@/assets/img/logo.png" alt="Максимум УЮТ"
                /></router-link>
                <p class="address underline">
                    Адрес:
                    <a :href="this.$store.state.address_maps_url">{{
                        this.$store.state.address
                    }}</a>
                </p>
                <div class="contact-info">
                    <a
                        :href="`tel:${this.$store.state.tel}`"
                        class="contact blue bold"
                        >{{ this.$store.state.tel }}</a
                    >
                    <a
                        :href="`mailto:${this.$store.state.email}`"
                        class="contact blue bold"
                        >{{ this.$store.state.email }}</a
                    >
                    <div class="socials">
                        <a
                            class="green"
                            href="https://www.instagram.com/mebel_maximum_uyt"
                            ><img
                                src="@/assets/img/stock/instagram.svg"
                                alt="Инстаграм"
                        /></a>
                        <a class="green" href="https://vk.com/uyutmaksimum"
                            ><img src="@/assets/img/stock/vk.svg" alt="ВК"
                        /></a>
                        <a class="green" href="https://t.me/@uyutmru"
                            ><img
                                src="@/assets/img/stock/telegram.svg"
                                alt="Телеграм"
                        /></a>
                        <a class="green" href="https://wa.me/+79263526185"
                            ><img
                                src="@/assets/img/stock/whatsapp.svg"
                                alt="Вотсап"
                        /></a>
                        <a class="green" :href="this.$store.state.youtube"
                            ><img
                                src="@/assets/img/stock/youtube.svg"
                                alt="Ютуб"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <nav class="header__bottom">
                <router-link
                    :to="{ name: 'Index' }"
                    :class="{ 'route-active': isRouteActive('/') }"
                    >Главная</router-link
                >
                <router-link
                    v-for="category in this.$store.state.categories"
                    :to="category.route"
                    :class="{
                        'router-link-active': isRouteActive(category.route),
                    }"
                    >{{ category.title }}</router-link
                >
                <router-link
                    :to="{ name: 'Mattresses' }"
                    :class="{
                        'router-link-active': isRouteActive('/mattresses'),
                    }"
                    >Матрасы</router-link
                >
                <router-link :to="{ name: 'Videos' }">Видео</router-link>
                <router-link :to="{ name: 'About' }">О нас</router-link>
                <router-link :to="{ name: 'Promo' }">Акции</router-link>
                <router-link :to="{ name: 'Reviews' }">Отзывы</router-link>
                <router-link :to="{ name: 'Credit' }">Кредит</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        isRouteActive(routePath) {
            if (this.$route.name === "ProductDetails") {
                return `/${this.$route.params.category}` === routePath;
            }
            if (this.$route.name === "MattressDetails") {
                return `/mattresses` === routePath;
            }
        },
    },
};
</script>

<style scoped>
.header__top {
    background: #f5f5f5;
    padding: 15px 0;
}

.header__top-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}
.header__top-inner a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    font-size: 18px;
}

.header__top-inner a img {
    width: 30px;
    height: 30px;
}

.header__top-inner a.dotted span {
    background-image: linear-gradient(
        to right,
        #000 10%,
        rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 7px 2px;
    transition: 0.3s;
    background-repeat: repeat-x;
}

.header__top-inner a.dotted:hover span {
    background-size: 9px 2px;
}

.header__middle {
    padding: 10px;
}

.bordered {
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
}

.header__middle-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
.header__middle .address {
    font-size: 20px;
    margin-inline: auto;
    max-width: 500px;
    text-align: center;
    font-weight: bold;
}

.header__middle .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.header__middle .contact-info .contact {
    font-size: 20px;
    border-bottom: 1px solid currentColor;
}

.header__middle .socials {
    display: flex;
    align-items: center;
    gap: 10px;
}
.header__middle .socials a {
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: currentColor;
}

.header__middle .socials a img {
    filter: invert(1);
}

.header__bottom {
    padding: 20px 0;
    display: flex;
    align-items: stretch;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}
.header__bottom a {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid currentColor;
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.5px;
}

.header__bottom a.router-link-active,
.header__bottom a:hover {
    background: var(--green);
    color: white;
}
</style>
