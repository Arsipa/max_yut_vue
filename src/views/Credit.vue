<template>
    <div>
        <PreviewSection
            title="Кредит в один клик от CRED_IT"
            img="/publicImg/previewSections/credit.jpg" />
        <section>
            <div class="container">
                <h2>Как это работает?</h2>
                <div class="hiw-wrapper">
                    <div class="hiw">
                        <p class="num">Шаг 1</p>
                        <p class="text">Выбираете способ покупки «В кредит»</p>
                    </div>
                    <div class="hiw">
                        <p class="num">Шаг 2</p>
                        <p class="text">
                            Заполняете анкету на сайте или по телефону
                        </p>
                    </div>
                    <div class="hiw">
                        <p class="num">Шаг 3</p>
                        <p class="text">
                            Ожидаете доставки документов курьером
                        </p>
                    </div>
                    <div class="hiw">
                        <p class="num">Шаг 4</p>
                        <p class="text">Подписываете кредитный договор</p>
                    </div>
                    <div class="hiw">
                        <p class="num">Шаг 5</p>
                        <p class="text">Забираете Ваш заказ</p>
                    </div>
                </div>
                <div class="centered">
                    <button class="btn custom_credit mycredit_openokno">
                        К оформлению
                    </button>
                </div>
            </div>
        </section>
        <section class="conditions">
            <div class="container">
                <h2>Условия оформления</h2>
                <p class="subtitle">
                    Стоимость услуги сервиса «Cred_IT» включается в сумму
                    кредита и составляет 5% от стоимости выбранного Вами товара.
                </p>
                <div class="centered">
                    <ul>
                        <li>Возраст клиента от 18 лет</li>
                        <li>Постоянная прописка в любом регионе России</li>
                        <li>Сумма от 10 000 до 500 000 рублей</li>
                        <li>Срок рассрочки от 6 до 36 месяцев</li>
                        <li>Первый взнос от 0%</li>
                    </ul>
                </div>
                <div class="centered">
                    <button
                        class="btn btn-invert custom_credit mycredit_openokno">
                        Оформить мебель в кредит
                    </button>
                </div>
                <p class="warning">
                    Заполняя форму вы соглашаетесь с
                    <a href="/files/politica.pdf" target="_blank"
                        >политикой конфиденциальности</a
                    >
                </p>
            </div>
        </section>
        <section class="partners">
            <div class="container">
                <h2>Партнеры сервиса онлайн кредитования CRED_IT</h2>
                <div class="partners-images">
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/renesans.svg"
                            alt="Ренесанс кредит" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/otpbank.svg"
                            alt="ОТП Банк" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/rusfinancebank.svg"
                            alt="Русфинанс Банк" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/rsb.svg"
                            alt="Русский Стандарт Банк" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/tinkoff.svg"
                            alt="Тинькофф" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/crediteurope.svg"
                            alt="Кредит ЕвропаБанк" />
                    </div>
                    <div class="partners-img">
                        <img
                            src="/publicImg/banks/vostbank.svg"
                            alt="Восточный Банк" />
                    </div>
                </div>
                <div class="centered">
                    <button class="btn custom_credit mycredit_openokno">
                        Рассчитать стоимость
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";

export default {
    name: "Credit",
    components: { PreviewSection },
    mounted() {
        let creditScript = document.createElement("script");
        creditScript.setAttribute(
            "src",
            "https://v-credit.su/services/easycredit/simple/js.js"
        );
        document.head.appendChild(creditScript);
    },
};
</script>
<style scoped>
h2 {
    text-align: center;
}
.hiw-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 20px;
}

.hiw {
    flex-basis: 40%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    border: 2px solid var(--green);
}
.hiw .num {
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 15px;
    background: var(--green);
    border-radius: 10px;
}
.hiw .text {
    font-size: 24px;
    color: black;
}
.conditions {
    padding: 50px 0;
    background: var(--green);
}

.conditions h2 {
    color: white;
    margin-bottom: 10px;
}

.conditions .subtitle {
    text-align: center;
    font-size: 20px;
    color: white;
    max-width: 60%;
    margin-inline: auto;
    margin-bottom: 30px;
    opacity: 0.8;
}
.conditions ul {
    list-style: none;
}
.conditions li {
    color: white;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
    border-radius: 10px;
    border: 2px solid white;
    padding: 10px 20px;
    opacity: 0.8;
}

.conditions li:hover {
    opacity: 1;
}

.conditions .warning {
    text-align: center;
    margin-top: 20px;
    color: white;
    max-width: 40%;
    margin-inline: auto;
}
.conditions .warning a {
    color: white;
    text-decoration: underline;
}
.conditions .warning a:hover {
    color: #6dff8a;
}

.partners .partners-images {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
}

.partners .partners-img {
    flex: 0 1 20%;
    padding: 20px;
    border-radius: 10px;
    /* border: 2px solid var(--green); */
    display: flex;
    align-items: center;
    justify-content: center;
}

.partners img {
    width: 100%;
}
</style>
