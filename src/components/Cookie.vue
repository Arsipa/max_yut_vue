<template>
    <div>
        <div class="bg" v-if="show">
            <div>
                <p>Мы используем файлы cookie.</p>
                <a href="https://ru.wikipedia.org/wiki/Cookie"
                    >Подробнее о cookie файлах</a
                >
            </div>
            <button class="btn btn-invert" @click="hide">Принять</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Cookie",
    data() {
        return {
            show: true,
        };
    },
    methods: {
        hide() {
            this.show = false;

            let addDaysToCurrentDate = (days) => {
                let date = new Date();
                date.setDate(date.getDate() + days);
                return date;
            };
            let obj = { value: "false", timestamp: addDaysToCurrentDate(5) };

            localStorage.setItem("showCookie", JSON.stringify(obj));
        },
    },
    created() {
        let limitDate = new Date(
            JSON.parse(localStorage.getItem("showCookie"))?.timestamp
        );
        let date = new Date();
        if (date.getTime() < limitDate.getTime()) {
            this.hide();
        }
    },
};
</script>
<style scoped>
.bg {
    position: fixed;
    transform: translateX(-50%);
    left: 50%;
    width: 600px;
    border-radius: 10px;
    bottom: 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;
    background: var(--green);
    z-index: 50;
    border: 2px solid white;
}
p {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}
a {
    text-decoration: underline;
    color: white;
    font-size: 16px;
}
button {
    margin-top: 0;
}

@media screen and (max-width: 850px) {
    .bg {
        width: 320px;
        flex-direction: column;
        gap: 20px;
    }
    p, a {
        text-align: center;
    }
}
</style>
