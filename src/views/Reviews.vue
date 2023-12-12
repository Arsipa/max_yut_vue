<template>
    <div>
        <PreviewSection
            title="Отзывы"
            img="/publicImg/previewSections/reviews.webp" />
        <section>
            <div class="container">
                <div class="reviews-wrapper">
                    <div class="column">
                        <div
                            class="review"
                            v-for="review in reviewsList.slice(0, halfList)">
                            <img :src="review" />
                        </div>
                    </div>
                    <div class="column">
                        <div
                            class="review"
                            v-for="review in reviewsList.slice(
                                halfList,
                                listLength
                            )">
                            <img :src="review" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";

export default {
    name: "Reviews",
    components: { PreviewSection },
    data() {
        return {
            reviewsList: [
                "/publicImg/reviews/1-1.webp",
                "/publicImg/reviews/1-2.webp",
                "/publicImg/reviews/1-5.webp",
                "/publicImg/reviews/1-3.webp",
                "/publicImg/reviews/1-4.webp",
                "/publicImg/reviews/1-6.webp",
                "/publicImg/reviews/1-7.webp",
            ],
        };
    },
    computed: {
        halfList() {
            return Math.ceil(this.reviewsList.length / 2);
        },
        listLength() {
            return this.reviewsList.length;
        },
    },
};
</script>
<style scoped>
section {
    --gap: 20px;
}
.reviews-wrapper {
    display: flex;
    align-items: flex-start;
    gap: var(--gap);
}

.column {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    gap: var(--gap);
}

.review {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--green);
}

img {
    width: 100%;
    border-radius: 10px;
}
</style>
