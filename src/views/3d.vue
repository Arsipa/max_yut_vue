<template>
    <div>
        <PreviewSection
            title="Бесплатный 3D дизайн-проект"
            img="/publicImg/previewSections/3d.png" />
        <section>
            <div class="container">
                <div class="row">
                    <div class="block">
                        <p class="block-title">Шаг 1</p>
                        <p class="block-text">
                            Вам нужно указать параметры вашей комнаты и
                            отправить их нам.
                        </p>
                    </div>
                    <div class="block">
                        <p class="block-title">Шаг 2</p>
                        <p class="block-text">
                            В ближайшее время наш менеджер свяжется с вами и
                            уточнит подробности.
                        </p>
                    </div>
                    <div class="block">
                        <p class="block-title">Шаг 3</p>
                        <p class="block-text">
                            В конечном результате вы получаете индивидуальный 3D
                            макет вашей системы хранения.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <fieldset>
                        <div class="input-block">
                            <p class="input-title">Назначение помещения*</p>
                            <select class="input" v-model="purpose" required>
                                <option>Не выбрано</option>
                                <option>Гардеробная</option>
                                <option>Прихожая</option>
                                <option>Кухня</option>
                                <option>Спальня</option>
                                <option>Кладовая</option>
                                <option>Детская</option>
                                <option>Гараж</option>
                                <option>Балкон</option>
                                <option>Прочее</option>
                            </select>
                        </div>
                        <div class="input-block">
                            <p class="input-title">Вид дизайн-проекта*</p>
                            <select class="input" v-model="type" required>
                                <option>Не выбрано</option>
                                <option>Стена</option>
                                <option>Угол</option>
                                <option>Ниша</option>
                                <option>Комната</option>
                            </select>
                        </div>
                        <div class="input-block">
                            <p class="input-title">ФИО*</p>
                            <input
                                type="text"
                                class="input"
                                placeholder="ФИО"
                                required />
                        </div>
                        <div class="input-block">
                            <p class="input-title">Телефон*</p>
                            <input
                                type="tel"
                                class="input"
                                placeholder="Телефон"
                                required />
                        </div>
                        <div class="input-block">
                            <p class="input-title">Email*</p>
                            <input
                                type="email"
                                class="input"
                                placeholder="Email"
                                required />
                        </div>
                        <div class="input-block">
                            <p class="input-title">Комментарий</p>
                            <textarea class="input"></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="input-block" v-for="input in inputsToShow">
                            <p class="input-title">{{ input }}</p>
                            <input
                                class="input"
                                type="number"
                                placeholder="0" />
                        </div>
                        <div class="input-block">
                            <p class="input-title">
                                Высота потолка в сантиметрах
                            </p>
                            <input
                                class="input"
                                type="number"
                                placeholder="0" />
                        </div>
                        <div class="input-block">
                            <p class="input-title">
                                Прикрепите дополнительные файлы
                            </p>
                            <input class="input" type="file" />
                        </div>
                        <div class="input-block">
                            <p class="input-title">Выбор вещей по категориям</p>
                            <div class="checkboxes-wrapper input">
                                <label
                                    ><input type="checkbox" /><span
                                        >Больше длинных вещей</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Обувь</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Сноуборд/лыжи</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Больше коротких вещей</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Гладильная доска</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Пылесос</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Галстуки</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Сушилка</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Стремянка</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Ремни</span
                                    ></label
                                >
                                <label
                                    ><input type="checkbox" /><span
                                        >Чемодан</span
                                    ></label
                                >
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="centered">
                    <button class="btn">Оформить заказ на дизайн-проект</button>
                </div>
                <p class="warning">
                    Нажимая кнопку "Оформить заказ на дизайн-проект", Я даю
                    согласие на обработку своих персональных данных
                </p>
            </div>
        </section>
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";

export default {
    name: "3d",
    components: { PreviewSection },
    data() {
        return {
            inputsInfo: {
                Стена: ["Длина стены"],
                Угол: ["Боковая стена", "Дальняя стена"],
                Ниша: ["Левая стена", "Правая стена", "Дальняя стена"],
                Комната: [
                    "Левая стена",
                    "Правая стена",
                    "Дальняя стена",
                    "Расстояние от левой стены до двери",
                    "Расстояние от правой стены до двери",
                ],
            },
            purpose: "Не выбрано",
            type: "Не выбрано",
        };
    },
    computed: {
        inputsToShow() {
            if (this.type === "Не выбрано") return [];
            return this.inputsInfo[this.type];
        },
    },
};
</script>
<style scoped>
.row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.block {
    max-width: 40%;
    padding: 20px;
    border: 2px solid var(--green);
    border-radius: 10px;
}

.block .block-title {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    color: var(--green);
    margin-bottom: 10px;
}
.block .block-text {
    line-height: 140%;
    font-size: 20px;
}

fieldset {
    border: none;
    flex: 1 1 40%;
}

.input-block {
    margin-bottom: 25px;
    width: 100%;
}

.input-title {
    font-size: 20px;
    margin-bottom: 5px;
}

.input {
    padding: 15px;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    font-size: 18px;
    outline: none;
    width: 100%;
}

textarea {
    resize: vertical;
    min-height: 100px;
}

.input:focus {
    border-color: var(--green);
}

.checkboxes-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 30px;
}

.checkboxes-wrapper input {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.checkboxes-wrapper label {
    display: flex;
    align-items: center;
    gap: 10px;
}

.checkboxes-wrapper label span {
    font-size: 18px;
}
.warning {
    font-size: 16px;
    opacity: 0.7;
    text-align: center;
    max-width: 50%;
    margin-inline: auto;
    margin-top: 20px;
}
</style>
