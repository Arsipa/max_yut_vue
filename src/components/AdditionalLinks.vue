<template>
    <div class="container">
        <div class="row">
            <router-link to="" class="item">
                <img src="@/assets/img/stock/tape.svg" alt="" />
                <p>Замер</p>
            </router-link>
            <router-link to="" class="item">
                <img src="@/assets/img/stock/delivery.svg" alt="" />
                <p>Доставка</p>
            </router-link>
            <router-link to="" class="item">
                <img src="@/assets/img/stock/wrench.svg" alt="" />
                <p>Монтаж бебели</p>
            </router-link>
            <router-link to="" class="item">
                <img src="@/assets/img/stock/calc.svg" alt="" />
                <p>Калькулятор</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "AdditionalLinks",
};
</script>
<style scoped>
.row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 20px;
    margin: 50px 0;
}
.item {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 14px;
    flex-grow: 1;
    color: var(--green);
    border: 2px solid var(--green);
    border-radius: 10px;
    font-size: 20px;
    text-transform: uppercase;
    transition: 0.3s;
    font-weight: bold;
}
.item img {
    transition: 0.3s;
}
.item:hover{
    color: white;
    background: var(--green);
}

.item:hover img{
    filter: invert(1)
}

.item img {
    width: 40px;
}
</style>
