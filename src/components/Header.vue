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
                <!-- <router-link :to="{ name: '3d' }">
                    <img src="@/assets/img/stock/3d.svg" alt="" />
                    <span>3D проект</span>
                </router-link> -->
            </div>
        </div>
        <div class="header__middle bordered">
            <div class="container">
                <div class="header__middle-inner">
                    <router-link :to="{ name: 'Index' }"
                        ><img src="@/assets/img/logo.png" alt="Максимум УЮТ"
                    /></router-link>
                    <a
                        :href="this.$store.state.address_maps_url"
                        class="address underline">
                        Адрес:
                        {{ this.$store.state.address }}
                    </a>
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
        </div>
        <div class="container">
            <div class="header__bottom burger" :class="{ open: isBurgerOpen }">
                <div class="burger-alignment">
                    <button
                        class="burger-icon"
                        @click="isBurgerOpen = !isBurgerOpen">
                        <div class="rows" v-if="!isBurgerOpen">
                            <div class="burger-line"></div>
                            <div class="burger-line"></div>
                            <div class="burger-line"></div>
                        </div>
                        <div class="times" v-else>X</div>
                    </button>
                </div>
                <nav class="burger-inner">
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
                <div :class="{ hidden: !isBurgerOpen }">
                    <a
                        :href="this.$store.state.address_maps_url"
                        class="address underline">
                        Адрес:
                        {{ this.$store.state.address }}
                    </a>
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
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isBurgerOpen: false,
        };
    },
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
.address {
    font-size: 20px;
    margin-inline: auto;
    max-width: 500px;
    text-align: center;
    font-weight: bold;
    display: block;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.contact-info .contact {
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid currentColor;
}

.socials {
    display: flex;
    align-items: center;
    gap: 10px;
}
.socials a {
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: currentColor;
}

.socials a img {
    filter: invert(1);
    width: 70%;
    height: 70%;
}

.header__bottom {
    padding: 20px 0;
}
.burger-alignment{
    display: none;
}
.burger-inner {
    display: flex;
    align-items: stretch;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}
.header__bottom nav a {
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

.header__bottom nav a.router-link-active,
.header__bottom nav a:hover {
    background: var(--green);
    color: white;
}

@media screen and (max-width: 1250px) {
    .header__top {
        padding: 10px 0;
    }
    .header__top-inner {
        gap: 20px;
    }
    .header__top-inner a {
        font-size: 14px;
    }
    .header__top-inner a img {
        width: 20px;
        height: 20px;
    }
    .header__middle .address {
        font-size: 16px;
        max-width: 300px;
    }
    .header__middle .contact-info .contact {
        font-size: 14px;
    }
    .header__middle .contact-info {
        gap: 5px;
    }
    .header__middle .socials a {
        width: 20px;
        height: 20px;
    }
    .header__middle {
        padding: 5px;
    }
    .header__bottom {
        padding: 10px 0;
    }
    .header__bottom nav a {
        font-size: 14px;
        letter-spacing: 0px;
        padding: 5px 8px;
    }
}
@media screen and (max-width: 850px) {
    .header__bottom{
        padding: 5px 0;
    }
    .header__middle{
        padding: 0;
    }
    .header__bottom nav a{
        font-size: 18px;
    }
    .header__top-inner {
        flex-wrap: wrap;
        gap: 5px 20px;
    }
    .address {
        margin-bottom: 20px;
        max-width: unset;
    }
    .header__top-inner a img,
    .header__middle .address,
    .header__middle .contact-info {
        display: none;
    }
    .header__middle-inner {
        justify-content: center;
    }
    .burger-icon {
        border-radius: 10px;
        padding: 10px;
        width: 50px;
        height: 50px;
        background: var(--green);
        outline: none;
        border: none;
    }
    .burger-icon .rows {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-around;
        gap: 5px;
    }
    .burger-icon .times {
        color: white;
        font-size: 24px;
        font-weight: bold;
    }
    .burger-line {
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background: white;
    }
    .burger-alignment {
        display: flex;
        justify-content: flex-end;
    }
    .burger .burger-inner {
        max-height: 0;
        overflow: hidden;
        transition: 0.5s;
    }
    .burger.open .burger-inner {
        max-height: unset;
        padding: 20px 0;
    }
    .burger.open {
        margin-bottom: 20px;
    }
}
</style>
