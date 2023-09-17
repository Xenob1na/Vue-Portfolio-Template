<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="max-w-[1055px] mx-auto mt-[160px]">
        <h2 class="text-center font-spacemono text-[48px] font-bold leading-[133%] text-white mb-[80px]" v-motion-pop-visible>Skills</h2>
        <div class="flex gap-10 justify-center" v-motion-pop-visible>
            <div class="rounded-[120px] border-solid border-2 border-[#DBA6F4] max-w-[244px] py-4 px-8 leading-[133%]" v-for="(skill, index) in skills.slice(0,4)" :key="index">
                <p class="text-center text-[22px] font-bold font-dmsans text">{{ skill.name }}</p>
            </div>
        </div>
        <div class="flex gap-10 justify-center mt-10" v-motion-pop-visible>
            <div class="rounded-[120px] border-solid border-2 border-[#DBA6F4]  py-4 px-8 leading-[133%]" v-for="(skill, index) in skills.slice(4,7)" :key="index">
                <p class="text-center text-[22px] font-bold font-dmsans text">{{ skill.name }}</p>
            </div>
        </div>
        <div class="mt-[80px] flex justify-center" v-motion-pop-visible>
            <img src="/img/Vector2.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
    {
        name: 'Design Strategy'
    },
    {
        name: 'Service Design'
    },
    {
        name: 'Design System'
    },
    {
        name: 'User Research'
    },
    {
        name: 'UX Design'
    },
    {
        name: 'UI Design'
    },
    {
        name: 'Motion  & Interactions'
    }
])
</script>

<style scoped>
.text {
    background: var(--gradient-lima, linear-gradient(270deg, #FFE597 11.87%, #AAFF82 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>