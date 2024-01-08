<template>
    <div class="page container">
        <div class="product">
            <div class="images">
                <img
                    :src="mainImg"
                    :alt="productInfo.title"
                    class="images__main" />
                <div
                    class="images__gallery slider"
                    v-if="productInfo.imgList.length > 0">
                    <button
                        v-if="showSliderControl"
                        class="control"
                        :class="{ disabled: isSliderPositionStart }"
                        @click="moveSlider(1)">
                        <svg
                            width="13"
                            height="21"
                            viewBox="0 0 13 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9502 20.0553C12.2321 19.7734 12.3905 19.391 12.3905 18.9923C12.3905 18.5936 12.2321 18.2112 11.9502 17.9292L4.50746 10.4865L11.9502 3.0437C12.2241 2.76012 12.3757 2.38031 12.3722 1.98608C12.3688 1.59184 12.2107 1.21472 11.9319 0.935943C11.6531 0.657165 11.276 0.499036 10.8818 0.49561C10.4875 0.492184 10.1077 0.643737 9.82415 0.917628L1.31834 9.42344C1.03646 9.7054 0.878113 10.0878 0.878113 10.4865C0.878113 10.8852 1.03646 11.2675 1.31834 11.5495L9.82415 20.0553C10.1061 20.3372 10.4885 20.4956 10.8872 20.4956C11.2859 20.4956 11.6683 20.3372 11.9502 20.0553Z"
                                fill="#3E92A3" />
                        </svg>
                    </button>
                    <div class="slider-track-overflow">
                        <div
                            class="slider__track"
                            :class="[
                                showSliderControl
                                    ? 'slider__track_start'
                                    : 'slider__track_center',
                            ]"
                            :style="`transform: translateX(${sliderPosition}px)`">
                            <div
                                v-for="(img, i) in productInfo.imgList"
                                :ref="`slide${i}`"
                                class="slider__slide"
                                :class="[
                                    mainImg === img
                                        ? 'slider__slide_active'
                                        : '',
                                ]">
                                <img
                                    :src="img"
                                    :alt="productInfo.title"
                                    @click="mainImg = img" />
                            </div>
                        </div>
                    </div>
                    <button
                        v-if="showSliderControl"
                        class="control"
                        :class="{ disabled: isSliderPositionEnd }"
                        @click="moveSlider(-1)">
                        <svg
                            width="13"
                            height="21"
                            viewBox="0 0 13 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.31833 0.935782C1.03645 1.21775 0.878096 1.60012 0.878096 1.99882C0.878096 2.39752 1.03645 2.77989 1.31833 3.06186L8.7611 10.5046L1.31833 17.9474C1.04443 18.231 0.892881 18.6108 0.896307 19.005C0.899733 19.3993 1.05786 19.7764 1.33664 20.0552C1.61542 20.3339 1.99254 20.4921 2.38678 20.4955C2.78101 20.4989 3.16082 20.3474 3.4444 20.0735L11.9502 11.5677C12.2321 11.2857 12.3904 10.9033 12.3904 10.5046C12.3904 10.1059 12.2321 9.72356 11.9502 9.44159L3.4444 0.935782C3.16244 0.653903 2.78006 0.495552 2.38136 0.495552C1.98267 0.495552 1.60029 0.653903 1.31833 0.935782Z"
                                fill="#3E92A3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h1>{{ productInfo.title }}</h1>
                <div class="table">
                    <div class="table__row" v-for="info in productInfo.info">
                        <p class="table__title">{{ info.title }}</p>
                        <p class="table__value">{{ info.value }}</p>
                    </div>
                </div>
                <p>Возможно оформление в рассрочку</p>
            </div>
        </div>
        <!-- <div class="change-page-wrapper">
            <router-link :to="getPageLink('prev')" class="change-page"
                ><span>&larr;</span>Предыдущая</router-link
            >
            <router-link :to="getPageLink('next')" class="change-page"
                >Следующая<span>&rarr;</span></router-link
            >
        </div> -->
    </div>
</template>
<script>
export default {
    name: "ProductDetails",
    data() {
        return {
            productInfo: {},
            mainImg: null,
            sliderPosition: 0,
            slideWidth: 300,
        };
    },
    computed: {
        showSliderControl() {
            return this.productInfo.imgList.length > 3;
        },
        slidesCount() {
            return this.productInfo.imgList.length;
        },
        isSliderPositionStart() {
            return this.sliderPosition === 0;
        },
        isSliderPositionEnd() {
            return (
                this.sliderPosition ===
                -1 * (this.slideWidth * this.slidesCount) + this.slideWidth * 3
            );
        },
    },
    methods: {
        moveSlider(direction) {
            this.sliderPosition += this.slideWidth * direction;
        },
        getPageLink(direction) {
            if (direction === "next") {
                let newId = 1;
                return `/${this.$route.params.category}/${newId}`;
            } else {
                return "/a";
            }
        },
    },
    created() {
        this.productInfo = this.$store.getters.getProductByCategoryAndId({
            category: this.$route.params.category,
            id: this.$route.params.id,
        });
        this.mainImg = this.productInfo.img;
    },
    mounted() {
        this.slideWidth = this.$refs.slide0[0].offsetWidth;
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
    min-width: 55%;
    max-width: 55%;
}
.images .images__main {
    width: 100%;
    object-fit: cover;
    height: 400px;
    border-radius: 10px;
    margin-bottom: 10px;
}
.images .images__gallery img {
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    filter: brightness(0.7);
}
.images .images__gallery img:hover {
    filter: brightness(1);
}

.product-info {
    flex-grow: 1;
}
.slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}
.slider .control {
    max-width: 30px;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 6px;
    outline: none;
    color: var(--green);
    border: 2px solid var(--green);
    transition: 0.3s;
}
.slider .control:hover {
    background: var(--green);
}
.slider .control path {
    transition: 0.3s;
}
.slider .control:hover path {
    fill: white;
}
.slider .slider-track-overflow {
    overflow: hidden;
    flex-grow: 1;
}
.slider .slider__track {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: 0.1s;
}
.slider .slider__track_start {
    justify-content: flex-start;
}
.slider .slider__track_center {
    justify-content: center;
}

.slider .slider__slide {
    border: 4px solid transparent;
    min-width: 33.33%;
    max-width: 33.33%;
    height: 150px;
    padding: 1px;
}
.slider .slider__slide_active {
    border-color: var(--green);
    border-radius: 10px;
}
.slider .slider__slide_active img {
    filter: brightness(1);
}

.table {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 20px;
}
.table__row {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid var(--green);
    padding-bottom: 4px;
}
.table__title {
    font-size: 20px;
}
.table__value {
    font-size: 18px;
    opacity: 0.5;
    text-align: right;
    flex-grow: 1;
    font-weight: bold;
}

/* .change-page-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 50px 0;
}

.change-page {
    padding: 20px;
    border: 2px solid var(--green);
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
    background: transparent;
    color: var(--green);
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
}

.change-page:hover {
    color: white;
    background: var(--green);
} */

@media screen and (max-width: 1250px) {
    h1{
        font-size: 30px;
        margin-bottom: 10px;
    }
    .images{
        min-width: 40%;
        max-width: 40%;
    }
    .table{
        gap: 10px;
    }
    .table__title{
        font-size: 16px;
    }
    .table__value{
        font-size: 14px;
    }
    .slider .slider__slide{
        min-width: 50%;
        max-width: 50%;
        height: 100px;
    }
}

@media screen and (max-width: 850px) {
    .product {
        flex-direction: column-reverse;
        align-items: stretch;
    }
    .images{
        min-width: 100%;
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    
}
</style>
