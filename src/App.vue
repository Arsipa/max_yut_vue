<template>
    <div class="wrapper">
        <Header></Header>
        <main>
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component" :key="$route.path"></component>
                </transition>
            </router-view>
        </main>
        <Footer></Footer>
        <ToTopButton />
        <Cookie />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ToTopButton from '@/components/ToTopButton.vue'
import Cookie from '@/components/Cookie.vue'

export default {
    name: "App",
    components: {
        Header,
        Footer,
        ToTopButton,
        Cookie,
    },
};
</script>

<style scoped>
@import "@/assets/css/main.css";
</style>
<style>
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex-grow: 1;
}
.slide-enter-active,
.slide-leave-active {
    transition: 0.4s;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
