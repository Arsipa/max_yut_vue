<template>
    <div>
        <div class="youtube">
            <div class="youtube__grid">
                <div
                    class="youtube-frame-wrapper"
                    v-for="src in this.$store.state.videos.slice(
                        0,
                        dynamicLimit
                    )">
                    <div class="loader"><i class="loader-icon"></i></div>
                    <iframe
                        @load="iframeLoaded"
                        :src="src"
                        title="YouTube video player"></iframe>
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
                target="_blank"
                    ><img
                        src="@/assets/img/stock/youtube-big.svg"
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
    data() {
        return {
            dynamicLimit: 1,
        };
    },
    methods: {
        iframeLoaded() {
            if (this.dynamicLimit >= this.limit) return;
            this.dynamicLimit += 1;
        },
    },
};
</script>
<style scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.loader-icon {
    width: 50px;
    height: 50px;
    border: 5px solid var(--green);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

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
    position: relative;
}
.youtube .youtube-frame-wrapper iframe {
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: relative;
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
    justify-content: center;
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


@media screen and (max-width: 1250px) {
    .youtube .youtube-frame-wrapper{
        height: 250px;
    }

}
@media screen and (max-width: 850px) {
    .youtube .youtube-frame-wrapper{
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
    }
    .youtube .youtube__bottom{
        flex-direction: column;
    }
    .youtube .youtube__link{
        padding: 15px;
        font-size: 16px;
    }
}

@media screen and (max-width: 480px) {}
</style>
