<template>
    <div>
        <PreviewSection title="Акции" img="/publicImg/previewSections/promo.jpg.webp" />
        <section>
            <div class="container">
                <div class="promo-inner">
                    <div class="promo" v-for="promo in promoList">
                        <h2>{{ promo.title }}</h2>
                        <ul v-if="promo.list">
                            <li v-for="item in promo.list">{{ item }}</li>
                        </ul>
                        <img
                            v-if="promo.img"
                            :src="promo.img"
                            :alt="promo.title" />
                    </div>
                </div>
            </div>
        </section>
        <CallMeForm />
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";
import CallMeForm from "@/components/CallMeForm.vue";

export default {
    name: "Promo",
    components: { PreviewSection, CallMeForm },
    data() {
        return {
            promoList: [
                {
                    title: "Сроки проведения акции: 01.10.2022 – 31.10.2022, последний заказ по акции принимается 01.11.2022 до 13:00 по МСК",
                    list: [
                        "Акция действует только на товары приобретенные с 31.08.2022",
                        "Все приборы в комплекте должны быть из разных товарных групп.",
                        "Мелкая бытовая техника и аксессуары в акции не участвуют.",
                        "В акции участвует товар только из наличия на день выставления счета.",
                        "Все заказы на комплекты оформляются отдельным счётом/ накладной, в одной накладной должен быть один комплект.",
                        "Скидки на 3-й прибор в комплекте рассчитывается в размере 50% от закупочной цены самого дешевого предмета.",
                        "Скидка на 4-й прибор в комплекте рассчитывается в размере 70% от закупочной цены самого дешевого предмета.",
                        "Скидка на 5-й прибор в комплекте рассчитывается в размере 100% от закупочной цены самого дешевого предмета.",
                        "В акции участвует вся крупная встраиваемая и отдельностоящая бытовая техника, за исключением товаров со статусом «промо цена».",
                    ],
                    img: "/publicImg/promo/promo.png.webp",
                },
                {
                    title: "Для новосёлов, молодоженов и пенсионеров представляем скидку 15% время действия предложения ограничено",
                },
                {
                    title: "При заказе кухни – столешница ЛДСП 38 мм - в ПОДАРОК",
                },
                {
                    title: "При заказе прихожей обувница в подарок!",
                    img: "/publicImg/promo/promo1.png.webp",
                },
            ],
        };
    },
};
</script>
<style scoped>
.promo-inner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
}
.promo {
    border-radius: 10px;
    padding: 20px;
    border: 2px solid var(--green);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
}
img {
    width: 100%;
    border-radius: 10px;
    display: flex;
}

h2 {
    text-align: center;
    margin-bottom: 0;
}

ul {
    padding-left: 30px;
}

li {
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 140%;
}
</style>
