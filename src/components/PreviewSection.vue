<template>
    <section>
        <img :src="img" :alt="title" v-if="img" />
        <div class="container">
            <h1>{{ title }}</h1>
        </div>
    </section>
</template>
<script>
export default {
    name: "PreviewSection",
    props: {
        title: String,
        img: String,
    },
};
</script>
<style scoped>
section {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 50px;
    background: rgba(0, 0, 0, 0.8);
}
img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    filter: brightness(0.4);
    object-fit: cover;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    position: relative;
    color: white;
    z-index: 2;
    font-size: 50px;
    text-align: center;
}
</style>
