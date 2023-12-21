<template>
    <div>
        <footer>
            <div class="footer__inner container">
                <div>
                    <p class="address">
                        Адрес:
                        <a :href="this.$store.state.address_maps_url">{{
                            this.$store.state.address
                        }}</a>
                    </p>
                    <a href="/files/politica.pdf" target="_blank" class="file">
                        Политика конфиденциальности
                    </a>
                </div>
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
            <p class="copyright container">
                © Максимум Уют 2012 - {{ new Date().getUTCFullYear() }}. Все
                права защищены
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
footer {
    background: #161617;
    padding: 50px 0;
    margin-top: 100px;
}
.footer__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
}
.address {
    font-size: 20px;
    max-width: 500px;
    font-weight: bold;
    color: white;
    margin-bottom: 30px;
}

.address a {
    color: white;
}

.file {
    color: white;
    opacity: 0.7;
    text-decoration: underline;
    font-size: 18px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.contact-info > a {
    color: white;
}
.contact-info .contact {
    font-size: 20px;
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
}

.socials a img {
    filter: invert(1);
}

.copyright {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
    color: white;
    margin-top: 30px;
}
</style>
