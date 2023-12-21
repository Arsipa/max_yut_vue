<template>
    <div>
        <button @click="scrollToTop" v-if="showButton">
            <svg
                width="21"
                height="11"
                viewBox="0 0 21 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.3245 10.2273C18.42 10.3176 18.5323 10.3881 18.655 10.4349C18.7777 10.4817 18.9085 10.5039 19.0398 10.5002C19.1711 10.4965 19.3004 10.4669 19.4202 10.4133C19.5401 10.3596 19.6483 10.2828 19.7385 10.1873C19.8287 10.0919 19.8992 9.97957 19.9461 9.85684C19.9929 9.73411 20.0151 9.60336 20.0113 9.47206C20.0076 9.34076 19.9781 9.21147 19.9244 9.09159C19.8707 8.9717 19.794 8.86356 19.6985 8.77334L10.6985 0.273342C10.5128 0.0978059 10.267 -4.25956e-07 10.0115 -4.37125e-07C9.75598 -4.48294e-07 9.51016 0.0978058 9.32449 0.273342L0.323488 8.77334C0.225927 8.86296 0.147145 8.97108 0.0917202 9.09141C0.0362956 9.21173 0.00533285 9.34187 0.000629011 9.47427C-0.00407483 9.60666 0.0175757 9.73867 0.0643211 9.86263C0.111067 9.98658 0.181975 10.1 0.27293 10.1963C0.363884 10.2927 0.473071 10.3699 0.594148 10.4237C0.715225 10.4775 0.845779 10.5067 0.978225 10.5095C1.11067 10.5124 1.24237 10.489 1.36567 10.4405C1.48898 10.3921 1.60143 10.3196 1.69649 10.2273L10.0115 6.5L18.3245 10.2273Z"
                    fill="white" />
            </svg>
        </button>
    </div>
</template>
<script>
export default {
    name: "ToTopButton",
    data() {
        return {
            showButton: false,
            scrollHideLimit: 300,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
            this.showButton = false;
        },
        throttle(callee, timeout) {
            let timer = null;
            return function perform(...args) {
                if (timer) return;
                timer = setTimeout(() => {
                    callee(...args);
                    clearTimeout(timer);
                    timer = null;
                }, timeout);
            };
        },
        checkPosition() {
            if (
                document.body.scrollTop > this.scrollHideLimit ||
                document.documentElement.scrollTop > this.scrollHideLimit
            ) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },
    },
    created() {
        let throttleScroll = this.throttle(this.checkPosition, 3000);
        window.addEventListener("scroll", throttleScroll);
    },
};
</script>
<style scoped>
button {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: var(--green);
    position: fixed;
    left: 50px;
    bottom: 50px;
    border: none;
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border: 2px solid white;
    cursor: pointer;
    transition: 0.3s;
}
button:hover {
    opacity: 0.8;
}
</style>
