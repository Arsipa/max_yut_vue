<template>
    <div>
        <div class="container">
            <p class="warning">ВАЖНО! Возможно изготовление любого размера по вашему желанию!</p>
            <section v-for="variant in productInfo.variants">
                <div class="product">
                    <div class="images">
                        <img
                            :src="variant.img"
                            :alt="variant.title"
                            class="images__main" />
                    </div>
                    <div class="product-info">
                        <h2>{{ variant.title }}</h2>
                        <div>
                            <div
                                v-for="info in variant.info"
                                class="info-block">
                                <p class="bold title">{{ info.title }}</p>
                                <div>
                                    <p v-for="row in info.values" class="value">
                                        {{ row }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="description" v-if="variant.description !== ''">
                    <span class="bold uppercase">Описание: </span
                    >{{ variant.description }}
                </p>
                <p class="table-title">Размер - цена:</p>
                <div class="table">
                    <!-- <div class="table-column">
                        <p class="left bold">Размер</p>
                        <p class="left">Цена</p>
                    </div> -->
                    <div
                        v-for="table in variant.size_chart"
                        class="table-column">
                        <p class="bold">{{ table.size }}</p>
                        <p>{{ table.price }} р.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "MattressDetails",
    data() {
        return {
            productInfo: {},
            mainImg: null,
        };
    },
    created() {
        console.log("a");
        this.productInfo = this.$store.getters.getProductByCategoryAndId({
            category: "mattresses",
            id: this.$route.params.id,
        });
        this.mainImg = this.productInfo.img;
    },
};
</script>
<style scoped>
p.warning{
    padding: 20px 0;
    font-size: 26px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: bold;
}
section {
    margin-bottom: 100px;
}
h2 {
    margin-bottom: 20px;
}
.product {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
}
.images {
    min-width: 40%;
    max-width: 40%;
}
.images .images__main {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
}
.product-info {
    flex-grow: 1;
}

.product-info > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.product-info .info-block {
    padding: 10px 0;
    display: flex;
    gap: 20px;
}

.info-block ~ .info-block {
    border-top: 2px solid rgba(0, 0, 0, 0.2);
}
.product-info .title {
    font-size: 20px;
    width: 170px;
}
.product-info .value {
    font-size: 18px;
    margin-bottom: 5px;
}
.description {
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 20px;
}
.table {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* border: 1px solid var(--green); */
    /* padding: 20px; */
    font-size: 20px;
    border-radius: 20px;
    flex-wrap: nowrap;
    gap: 5px;
}

.table p {
    text-align: center;
}

.table .left {
    text-align: left;
}

.table p.bold {
    margin-bottom: 5px;
    font-size: 18px;
}

.table-column {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    flex-grow: 1;
}

.table-title{
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
}

/* .table-column:first-child {
    border: none;
} */
</style>
