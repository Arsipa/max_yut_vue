<template>
    <div>
        <PreviewSection
            title="Максимум УЮТ - исполним любую вашу задумку"
            img="/publicImg/previewSections/index.webp"
            class="preview" />
        <section class="why">
            <div class="container">
                <h2 class="bold">ПОЧЕМУ ИМЕННО МЫ?</h2>
                <ul>
                    <li>Более 100 решенных кейсов</li>
                    <li>Бесплатный 3D дизайн проекта</li>
                    <li>На рынке с 2012 года</li>
                    <li>Гарантия на изделия 2 года</li>
                    <li>Четкие сроки</li>
                    <li>Доступные цены</li>
                    <li>Бесплатный выезд замерщика в пределах МКАД</li>
                    <li>Проекты любой сложности</li>
                    <li>Широкий ассортимент</li>
                    <li>Установка и монтаж за 3-4 недели</li>
                </ul>
            </div>
        </section>
        <section class="categories container" id="categories">
            <h2 class="bold">Категории</h2>
            <Grid :list="this.$store.state.categories" />
        </section>
        <section class="promo container">
            <h2>Акции</h2>
            <img
                src="/publicImg/promo/promo.png"
                alt="Комплектом дешевле"
                loading="lazy"
                class="promo__img" />
            <div class="centered">
                <router-link :to="{ name: 'Promo' }" class="promo__link"
                    ><img src="@/assets/img/stock/discount.svg" alt="Скидка" />
                    Больше акций</router-link
                >
            </div>
        </section>
        <section class="call-to-action">
            <div class="container call-to-action__inner">
                <div class="call-to-action__text">
                    <p>Заполните форму и получите бесплатную консультацию!</p>
                    <p>Мы свяжемся с вами в течении 5 минут!</p>
                </div>
                <a href="#form"> Получить консультацию </a>
            </div>
        </section>
        <section class="materials container">
            <h2>Материалы</h2>
            <div class="materials__grid">
                <div
                    class="material-wrapper"
                    v-for="material in this.$store.state.materials">
                    <div class="material">
                        <p class="material__title">
                            <span class="bold">{{ material.short_title }}</span>
                            -
                            {{ material.title }}
                        </p>
                        <img
                            class="material__img"
                            loading="lazy"
                            :src="material.img"
                            :alt="material.short_title" />
                    </div>
                </div>
            </div>
        </section>
        <section class="hiw">
            <div class="container">
                <h2>Как мы работаем</h2>
                <div class="hiw__list">
                    <div class="hiw__item-wrapper">
                        <div class="hiw__item">
                            <div class="num">01</div>
                            <div>
                                <p class="title">Прием заявок</p>
                                <p class="text">
                                    Наши специалисты обрабатывают каждую заявку
                                    индивидуально, учитывая все пожелания
                                    клиента
                                </p>
                            </div>
                        </div>
                        <img src="@/assets/img/stock/arrow.svg" alt="" />
                    </div>
                    <div class="hiw__item-wrapper">
                        <div class="hiw__item">
                            <div class="num">02</div>
                            <div>
                                <p class="title">Выезд специалиста</p>
                                <p class="text">
                                    Наш мастер прибудет к вам в удобное для вас
                                    время и место, чтобы произвести все
                                    необходимые замеры
                                </p>
                            </div>
                        </div>
                        <img src="@/assets/img/stock/arrow.svg" alt="" />
                    </div>
                    <div class="hiw__item-wrapper">
                        <div class="hiw__item">
                            <div class="num">03</div>
                            <div>
                                <p class="title">Осмотр и замер</p>
                                <p class="text">
                                    Наши специалисты производят профессиональный
                                    осмотр и замер на месте, учитывая все
                                    особенности помещения и ваши пожелания
                                </p>
                            </div>
                        </div>
                        <img src="@/assets/img/stock/arrow.svg" alt="" />
                    </div>
                    <div class="hiw__item-wrapper">
                        <div class="hiw__item">
                            <div class="num">04</div>
                            <div>
                                <p class="title">Согласование</p>
                                <p class="text">
                                    После замера наш дизайнер предложит вам
                                    возможные варианты оформления заказа,
                                    учитывая стиль вашего интерьера
                                </p>
                            </div>
                        </div>
                        <img src="@/assets/img/stock/arrow.svg" alt="" />
                    </div>
                    <div class="hiw__item-wrapper">
                        <div class="hiw__item">
                            <div class="num">05</div>
                            <div>
                                <p class="title">Доставка</p>
                                <p class="text">
                                    Мы гарантируем своевременную доставку и
                                    качественную установку вашей новой мебели
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="youtube">
            <div class="container">
                <h2>Наши реальные кейсы</h2>
                <YoutubeVideos :limit="4" />
            </div>
        </section>
        <section class="certificates">
            <div class="container">
                <h2>Сертификаты</h2>
                <div class="certificates__grid">
                    <div
                        class="certificate-wrapper"
                        v-for="certificate in this.$store.state.certificates.slice(
                            0,
                            certificatesToShow
                        )">
                        <a :href="certificate" target="_blank"
                            ><img :src="certificate" alt="Сертификат"
                        /></a>
                    </div>
                </div>
                <div class="centered">
                    <button
                        v-if="
                            certificatesToShow !==
                            this.$store.state.certificates.length
                        "
                        @click="showMore('certificatesToShow', 'certificates')"
                        class="btn">
                        Смотреть ещё
                    </button>
                </div>
            </div>
        </section>
        <section class="form-section" id="form">
            <div class="container">
                <h2>Остались вопросы?</h2>
                <p class="subtitle">
                    Оставьте заявку на звонок, и наш специалист свяжется с Вами
                    в течении 5 минут!
                </p>
                <form>
                    <div class="row">
                        <input
                            class="input"
                            type="text"
                            placeholder="Имя"
                            name="name" />
                        <input
                            class="input"
                            type="tel"
                            placeholder="Телефон*"
                            name="phone"
                            required />
                    </div>
                    <textarea
                        class="input"
                        name="message"
                        placeholder="Сообщение"></textarea>
                    <div class="centered">
                        <button type="submit">Отправить заявку</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import PreviewSection from "@/components/PreviewSection.vue";
import Grid from "@/components/Grid.vue";
import YoutubeVideos from "@/components/YoutubeVideos.vue";

export default {
    name: "Index",
    components: { PreviewSection, Grid, YoutubeVideos },
    data() {
        return {
            certificatesToShow: 6,
        };
    },
    methods: {
        showMore(toShow, array) {
            this[toShow] = this.$store.state[array].length;
        },
    },
};
</script>

<style scoped>
.preview {
    margin-bottom: 0px;
}
.why {
    background: var(--green);
    padding: 50px 0;
    color: white;
}
.why ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    gap: 20px;
}
.why li {
    font-size: 24px;
    flex-grow: 1;
    padding: 20px;
    border: 2px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.materials .materials__grid {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
}
.materials .material-wrapper {
    flex: 1 1 400px;
    padding: 10px;
}
.materials .material {
    border: 2px solid var(--green);
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}
.materials .material__title {
    font-size: 20px;
    text-align: center;
}
.call-to-action {
    background: var(--green);
    color: white;
    padding: 40px 0;
}

.call-to-action .call-to-action__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.call-to-action .call-to-action__text p {
    font-size: 26px;
    margin-bottom: 5px;
}
.call-to-action .call-to-action__text p:last-child {
    font-size: 20px;
    opacity: 0.8;
}
.call-to-action a {
    display: block;
    padding: 20px;
    font-size: 20px;
    border: 2px solid white;
    color: white;
    border-radius: 10px;
    transition: 0.3s;
    font-weight: bold;
}
.call-to-action a:hover {
    background-color: white;
    color: var(--green);
}
.promo .promo__img {
    border-radius: 10px;
    width: 100%;
    margin-bottom: 20px;
}
.promo .promo__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid var(--green);
    color: var(--green);
    font-size: 24px;
    font-weight: bold;
    width: 60%;
    text-align: center;
    transition: 0.3s;
}

.promo .promo__link img {
    width: 40px;
    height: 40px;
    filter: invert(48%) sepia(5%) saturate(4987%) hue-rotate(143deg)
        brightness(105%) contrast(79%);
    transition: 0.3s;
}

.promo .promo__link:hover {
    background-color: var(--green);
    color: white;
}

.promo .promo__link:hover img {
    filter: invert(1);
}

.hiw .hiw__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
}

.hiw .hiw__item-wrapper {
    display: flex;
    align-items: flex-end;
}
.hiw .hiw__item-wrapper:nth-child(2n) {
    justify-content: flex-end;
}

.hiw .hiw__item-wrapper img {
    width: 80px;
}
.hiw .hiw__item-wrapper:nth-child(2n) img {
    order: -1;
    transform: scale(-1, 1);
}
.hiw .hiw__item {
    border-radius: 10px;
    border: 2px solid var(--green);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 70%;
}

.hiw .hiw__item .num {
    font-size: 30px;
    background: var(--green);
    color: white;
    font-weight: bold;
    border-radius: 10px;
    min-width: 80px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hiw .hiw__item .title {
    color: var(--green);
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 10px;
}
.hiw .hiw__item .text {
    color: black;
    font-size: 20px;
    line-height: 140%;
}

.certificates .certificates__grid {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
}

.certificates .certificate-wrapper {
    width: 33.33%;
    padding: 10px;
}
.certificates .certificate-wrapper a {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid var(--green);
}
.certificates .certificate-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.form-section {
    background: var(--green);
    padding: 50px 0;
    margin-bottom: -100px;
    color: white;
}

.form-section h2 {
    margin-bottom: 10px;
    text-align: center;
}
.form-section .subtitle {
    margin-inline: auto;
    margin-bottom: 30px;
    text-align: center;
    font-size: 26px;
    max-width: 60%;
}

.form-section form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    margin: 0 auto;
    max-width: 700px;
}
.form-section form .row {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
}
.form-section form .input {
    outline: none;
    background: white;
    flex-grow: 1;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    line-height: 140%;
}

.form-section form textarea {
    height: 200px;
    resize: none;
}

.form-section form button {
    font-size: 20px;
    padding: 20px 40px;
    cursor: pointer;
    background: none;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    transition: 0.3s;
    font-weight: bold;
}
.form-section form button:hover {
    background: white;
    color: var(--green);
}
</style>
