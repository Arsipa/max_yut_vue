<template>
    <div>
        <PreviewSection
            title="Калькулятор дверей-купе"
            img="/publicImg/previewSections/calcDveriKupe.jpg" />
        <section>
            <div class="container">
                <iframe src="@/ets/Calculatr/i.html"></iframe>
            </div>
        </section>
    </div>
</template>
<script>
import PreviewSection from "@/components/PreviewSection.vue";

export default {
    name: "Calculator",
    components: { PreviewSection },
};
</script>
<style scoped>
iframe{
    width: 100%;
    height: 1200px;
    border: none;
}
</style>
