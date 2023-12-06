<template>
    <div>
        <PreviewSection
            title="Наш канал на Ютуб"
            img="https://yt3.googleusercontent.com/v9FZxJZg8z_gWWzkUN4G9xeTG3xv_wyAbFm9YjoVFXpcDdCmHcUlOL_u9F9mYNSVatUbM_DMedM=s176-c-k-c0x00ffffff-no-rj" />
        <YoutubeVideos />
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";
import YoutubeVideos from "@/components/YoutubeVideos.vue";
export default {
    name: "Videos",
    components: { PreviewSection, YoutubeVideos },
};
</script>
<style></style>
