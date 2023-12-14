<template>
    <div>
        <PreviewSection
            title="О нас"
            img="/publicImg/previewSections/about.jpg" />
        <section>
            <div class="container">
                <h2>О нас</h2>
                <p>
                    Свою историю компания <span class="bold">Максимум УЮТ</span
                    > начала в 2012 году. Вдохновившись поездкой на мебельную
                    выставку, организатор проекта, Павел Валуев, всерьез решил
                    заняться изучением мебели и налаживанием всего
                    производственного процесса.
                </p>
                <p>
                    С 2012 по 2018 г. компания работала по рекомендациям и
                    сарафанному радио.
                </p>
                <p>
                    С 2019 года – <span class="bold">Максимум УЮТ</span> имеет
                    свое собственное производство и интернет-магазин.
                </p>
                <p>
                    Мы постоянно растем и развиваемся. Так в 2022 году было
                    принято решение, открыть офис, который открывает больше
                    возможностей для клиентов: можно приехать и увидеть все
                    предлагаемые образцы, также, прям в офисе, просчитать
                    стоимость изделия по размерам и желанию клиента, что не
                    исключает дальнейшего замера помещения по адресу клиента.
                </p>
                <p>
                    <span class="bold">Максимум Уют</span> работает со многими
                    мебельными фабриками и производствами в Москве и
                    МО. Компания производит корпусную мебель самой различной
                    сложности, используя материалы и фурнитуру от эконома до
                    премиум - класса.
                </p>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="contacts">
                    <div>
                        <h2>Контакты</h2>
                        <p>
                            <span class="bold">Адрес: </span>
                            <a href="https://yandex.ru/maps/-/CDq6N81M">{{
                                this.$store.state.address
                            }}</a>
                        </p>
                        <p>
                            <span class="bold">Телефон: </span>
                            <a :href="'tel:' + this.$store.state.tel">{{
                                this.$store.state.tel
                            }}</a>
                        </p>
                        <p>
                            <span class="bold">Почта: </span>
                            <a :href="'mailto:' + this.$store.state.email">{{
                                this.$store.state.email
                            }}</a>
                        </p>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc2db1a8bade98367cd26529591b34c8a5502f0c96f7027f400c582e4c7d886b&amp;source=constructor"></iframe>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h2>Сотрудничество</h2>
                <p>
                    Приглашаем к сотрудничеству дизайнеров, строителей и
                    ремонтные бригады.
                </p>
                <p>
                    Мы максимально ответственно подходим к работе и оперативно
                    консультируем наших партнеров по техническим вопросам, что
                    позволяет вам заранее учесть все нюансы и оптимизировать
                    процесс работы. Благодаря этому сотрудничеству, вы сможете
                    сэкономить время и средства, не допуская ошибок в процессе
                    реализации проекта.
                </p>
                <p>
                    Мы всегда готовы подготовить для вас коммерческое
                    предложение и дать подробную информацию о сроках и условиях
                    сотрудничества. Наши специалисты обладают большим опытом.
                </p>
                <p>
                    Мы стараемся быть доступными для наших партнеров и держим
                    связь с ними любым удобным для них способом. Вы можете
                    связаться с нами по телефону, электронной почте, WhatsApp
                    или Telegram, и мы всегда будем рады помочь вам.
                </p>
                <p>
                    Сотрудничество с нами предполагает достойное вознаграждение
                    за ваш труд. Мы ценим наших партнеров и готовы предложить им
                    выгодные условия сотрудничества.
                </p>
                <div class="centered">
                    <a :href="'tel:' + this.$store.state.tel" class="btn"
                        >Узнать больше</a
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PreviewSection from "@/components/PreviewSection.vue";

export default {
    name: "About",
    components: { PreviewSection },
};
</script>

<style scoped>
section p {
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 20px;
}
.contacts {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
}
.contacts p {
    font-size: 26px;
    margin-bottom: 30px;
}
.contacts iframe {
    min-width: 60%;
    height: 400px;
    border: none;
    border-radius: 10px;
}
</style>
