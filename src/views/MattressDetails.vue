<template>
    <div class="page container">
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
                        <div v-for="info in variant.info">
                            <p class="bold">{{ info.title }}</p>
                            <div>
                                <p v-for="row in info.values">{{ row }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="description">{{ variant.description }}</p>
            <div>
                <div>
                    <p>Размер</p>
                    <p>Цена</p>
                </div>
                <div v-for="table in variant.size_chart">
                    <p>{{ table.size }}</p>
                    <p>{{ table.price }}</p>
                </div>
            </div>
        </section>
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
.page {
    margin-bottom: 50px;
}
h1 {
    font-size: 40px;
    margin-bottom: 20px;
}
.product {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
}
.images {
    min-width: 40%;
    max-width: 40%;
}
.images .images__main {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 10px;
}
.product-info {
    flex-grow: 1;
}
</style>
