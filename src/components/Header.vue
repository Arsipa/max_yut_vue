<template>
    <header>
        <div class="header__top">
            <div class="container header__top-inner">
                <!-- <div class="header__top-block">
                    <img src="@/assets/img/stock/phone.svg" alt="" />
                    <router-link to="/call-me.html" class="dotted">
                        Заказать звонок
                    </router-link>
                </div>
                <div class="header__top-block">
                    <img src="@/assets/img/stock/calc.svg" alt="" />
                    <router-link
                        to="/kalkulyator-dverej-kupe.html"
                        class="dotted">
                        Калькулятор дверей-купе
                    </router-link>
                </div>
                <div class="header__top-block">
                    <img src="@/assets/img/stock/roulette.svg" alt="" />
                    <router-link to="/zamer.html#zamer"> Замер </router-link>
                </div>
                <div class="header__top-block">
                    <img src="@/assets/img/stock/car.svg" alt="" />
                    <router-link to="/zamer.html#delivery">
                        Доставка
                    </router-link>
                </div>
                <div class="header__top-block">
                    <img src="@/assets/img/stock/montage.svg" alt="" />
                    <router-link to="/zamer.html#montage"> Монтаж </router-link>
                </div>
                <div class="header__top-block">
                    <img src="@/assets/img/stock/3d.svg" alt="" />
                    <router-link to="/besplatnyij-3d-dizajn-proekt.html">
                        3D проект
                    </router-link>
                </div> -->
            </div>
        </div>
        <div class="header__middle bordered">
            <div class="header__middle-inner container">
                <router-link :to="{ name: 'Index' }"
                    ><img src="@/assets/img/logo.png" alt="Максимум УЮТ"
                /></router-link>
                <p class="address">Адрес: {{ this.$store.state.address }}</p>
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
                            ><img src="@/assets/img/stock/instagram.svg" alt=""
                        /></a>
                        <a class="green" href="https://vk.com/uyutmaksimum"
                            ><img src="@/assets/img/stock/vk.svg" alt=""
                        /></a>
                        <a class="green" href="https://t.me/@uyutmru"
                            ><img src="@/assets/img/stock/telegram.svg" alt=""
                        /></a>
                        <a class="green" href="https://wa.me/+79263526185"
                            ><img src="@/assets/img/stock/whatsapp.svg" alt=""
                        /></a>
                    </div>
                </div>
            </div>
        </div>
        <nav class="header__bottom container">
            <router-link
                :to="{ name: 'Index' }"
                :class="{ 'route-active': isRouteActive('/') }"
                >Главная</router-link
            >
            <router-link
                v-for="category in this.$store.state.categories"
                :to="category.route"
                :class="{ 'router-link-active': isRouteActive(category.route) }"
                >{{ category.title }}</router-link
            >
            <!-- <router-link to="/matras/index.html">Матрасы</router-link> -->
            <router-link :to="{ name: 'Videos' }">Видео</router-link>
            <!-- <router-link to="/kuxni/index.html">Акции</router-link> -->
            <!-- <router-link to="/kredit.html">Кредит</router-link> -->
            <!-- <router-link to="/cooperation.html">Сотрудничество</router-link> -->
            <!-- <router-link to="/matras/index.html">О нас</router-link> -->
            <!-- <router-link to="/matras/index.html">Отзывы</router-link> -->
        </nav>
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
    justify-content: flex-end;
    gap: 25px;
}
.header__top-block {
    display: flex;
    align-items: center;
    gap: 10px;
}
.header__top-block a {
    border-bottom: 1px dotted transparent;
    color: #000;
    font-size: 12px;
}
.header__top-block a.dotted {
    border-bottom: 1px dotted #000;
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
    padding: 15px 0;
    display: flex;
    align-items: stretch;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}
.header__bottom a {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid currentColor;
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 16px;
}

.header__bottom a.router-link-active,
.header__bottom a:hover {
    background: var(--green);
    color: white;
}
</style>
