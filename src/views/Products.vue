<template>
    <div>
        <PreviewSection :title="title" :img="img"/>
        <section class="products container">
            <Grid :list="listToShow" />
            <div class="centered">
                <button class="btn" @click="loadMore" v-if="showSeeMoreButton">
                    Загрузить еще
                </button>
            </div>
        </section>
        <CallMeForm />
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";
import Grid from "@/components/Grid.vue";
import CallMeForm from "@/components/CallMeForm.vue";

export default {
    name: "ProductsPage",
    components: { PreviewSection, Grid, CallMeForm },
    props: {
        title: String,
        img: String,
        category: String,
    },
    data() {
        return {
            list: [],
            listToShow: [],
            pageLimit: 9,
        };
    },
    computed: {
        showSeeMoreButton() {
            return this.listToShow.length < this.list.length;
        },
    },
    methods: {
        loadProducts() {
            this.list = this.$store.getters.getProductsByCategory(
                this.category
            );
            this.listToShow = this.list.slice(0, this.pageLimit);
        },
        loadMore() {
            this.listToShow = this.list.slice(
                0,
                this.listToShow.length + this.pageLimit
            );
        },
    },
    watch: {
        category() {
            this.loadProducts();
        },
    },
    created() {
        this.loadProducts();
    },
};
</script>
<style scoped>

</style>
