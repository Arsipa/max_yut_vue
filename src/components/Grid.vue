<template>
    <div class="grid">
        <div class="card-wrapper" v-for="item in list">
            <router-link :to="item.route" v-if="this.type === 'category'">
                <div class="card">
                    <h3>{{ item.title }}</h3>
                    <img :src="item.img" :alt="item.title" loading="lazy" />
                </div>
            </router-link>
            <a :href="item" target="_blank" v-else>
                <div class="card">
                    <img :src="item" loading="lazy" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Grid",
    props: {
        list: Array,
        type: String,
    },
};
</script>
<style scoped>
.grid {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
}
.grid::after {
    content: "";
    width: 33.33%;
}
.card-wrapper {
    width: 33.33%;
    padding: 10px;
}
.card {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}
h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: black;
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
}

img {
    object-fit: cover;
    border-radius: 10px;
    transition: 0.5s;
    height: 280px;
}
img:hover {
    filter: brightness(0.8);
}

@media screen and (max-width: 1250px) {
    .grid::after {
        content: "";
        width: 50%;
    }
    .card-wrapper {
        width: 50%;
        padding: 10px;
    }
}

@media screen and (max-width: 850px) {
    .card-wrapper {
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
    }
}
</style>
