<template>
    <div>
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
export default {
    name: "CallMeForm",
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
