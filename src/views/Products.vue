<template>
    <div>
        <PreviewSection :title="title" :img="img" />
        <section class="products container">
            <Grid :list="list" />
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
        };
    },
    methods: {
        loadProducts() {
            this.list = this.$store.getters.getProductsByCategory(
                this.category
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
<style scoped></style>
