<template>
    <div>
        <div class="youtube container">
            <div class="youtube__grid">
                <div
                    class="youtube-frame-wrapper"
                    v-for="src in this.$store.state.videos.slice(0, limit)">
                    <iframe :src="src" title="YouTube video player"></iframe>
                </div>
            </div>
            <div class="youtube__bottom">
                <router-link
                    :to="{ name: 'Videos' }"
                    class="youtube__link"
                    v-if="limit"
                    >Больше видео</router-link
                >
                <a class="youtube__link" :href="this.$store.state.youtube"
                    ><img
                        src="@/assets/img/stock/youtube.svg"
                        :alt="this.$store.state.youtube" />
                    <p>Канал Максимум Уют</p></a
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "YoutubeVideos",
    props: {
        limit: Number,
    },
};
</script>
<style scoped>
.youtube .youtube__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
}
.youtube .youtube-frame-wrapper {
    width: 50%;
    height: 400px;
    padding: 10px;
}
.youtube .youtube-frame-wrapper iframe {
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
}
.youtube .youtube__bottom {
    display: flex;
    align-items: stretch;
    gap: 20px;
    justify-content: center;
}
.youtube .youtube__link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    background: var(--green);
}

.youtube .youtube__link img {
    width: 50px;
}
</style>
