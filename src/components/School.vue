<template>
    <div class="max-w-[1270px] mx-auto mt-[80px] flex justify-between">
        <div>
            <img src="/img/foto1.png" alt="" v-motion-pop-visible>
        </div>
        <div>
            <div v-motion-pop-visible>
                <h4 class="text-[78px] font-spacemono font-bold leading-[120%] text">School</h4>
                <p class="text-[32px] font-dmsans font-bold leading-[150%] text mt-2">2006 - 2010</p>
            </div>
            <div class="max-w-[580px] mt-[48px]">
                <article class="text-white text-[32px] font-dmsans font-bold leading-[150%] mb-[30px]" v-motion-pop-visible>I started studying at the design school of Duoc UC in Santiago</article>
                <article class="text-white text-[32px] font-dmsans font-bold leading-[150%]" v-motion-pop-visible>In my early years, I explored different styles and met great designers.</article>
            </div>
            <div class="flex justify-between mt-[48px] text-center">
                <div class="bg-[#282828] rounded-[20px] px-5 py-5 max-w-[270px]" v-motion-pop-visible>
                    <p class="text-[18px] font-dmsans font-normal leading-[32px] text-white" v-motion-pop-visible>I was very good at the interaction and web design courses</p>
                </div>
                <div class="bg-[#282828] rounded-[20px] px-5 py-5 max-w-[270px]" v-motion-pop-visible>
                    <p class="text-[18px] font-dmsans font-normal leading-[32px] text-white" v-motion-pop-visible>I really liked the power of design and illustration to tell stories</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text {
    background: var(--gradient-sky, linear-gradient(270deg, #BFF0FF 11.87%, #82B4FF 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>