<template>
    <div>
        <section class="form-section" id="form">
            <div class="container">
                <h2>Остались вопросы?</h2>
                <p class="subtitle">
                    Оставьте заявку на звонок, и наш специалист свяжется с Вами
                    в течении 5 минут!
                </p>
                <form @submit.prevent="makeRequest" ref="form">
                    <div class="row">
                        <input
                            class="input"
                            type="text"
                            placeholder="Имя"
                            name="name" />
                        <input
                            class="input"
                            v-mask="'+7 (###) ###-##-##'"
                            type="tel"
                            placeholder="Телефон*"
                            name="tel"
                            required />
                    </div>
                    <textarea
                        class="input"
                        name="comment"
                        placeholder="Сообщение"></textarea>
                    <div class="centered">
                        <button
                            type="submit"
                            :class="{ disabled: isButtonDisabled }">
                            {{
                                isButtonDisabled
                                    ? "Ожидайте..."
                                    : "Отправить заявку"
                            }}
                        </button>
                    </div>
                    <p class="warning">Отправляя заявку, вы даёте согласие на обработку персональных данных</p>
                </form>
            </div>
        </section>
    </div>
</template>
<script>
import emailjs from "@emailjs/browser";
import { mask } from "vue-the-mask";

export default {
    name: "CallMeForm",
    directives: { mask },
    data() {
        return {
            isButtonDisabled: false,
        };
    },
    methods: {
        async makeRequest() {
            this.isButtonDisabled = true;

            await emailjs
                .sendForm(
                    "service_zpz8lib", // service key
                    "template_vcdc6w7", //template key
                    this.$refs.form,
                    "0QRQBy44deU5RCs9w" //public key
                )
                .then((response) => {
                    console.log(response);
                    alert(
                        "Письмо успешно отправлено! Скоро мы с вами свяжемся"
                    );
                })
                .catch((error) => {
                    alert(
                        "Ошибка! Попробуйте снова. При повторной ошибке напишите нам в соц. сети"
                    );
                });

            this.isButtonDisabled = false;
            this.$refs.form.reset();
        },
    },
};
</script>
<style scoped>
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
    flex-wrap: wrap;
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

p.warning {
    text-align: center;
    font-size: 16px;
    opacity: 0.8;
    max-width: 50%;
    margin: 0 auto;
    letter-spacing: 0.8px;
}

@media screen and (max-width: 1250px) {
}

@media screen and (max-width: 850px) {
    .form-section .subtitle {
        max-width: 90%;
        font-size: 20px;
    }
    p.warning {
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
}
</style>
