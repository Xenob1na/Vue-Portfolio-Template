<template>
    <div class="mt-[80px]">
        <div class="max-w-[1022px] mx-auto flex justify-between mb-[80px]">
            <article class="text-[40px] font-nanum uppercase leading-[100%] font-normal text max-w-[445px] mt-[100px]" v-motion-pop-visible>I
                arrived to do my internship
                and stayed a couple of years as a web designer</article>
            <img src="/img/foto2.png" alt="" v-motion-pop-visible>
        </div>
        <div class="max-w-[1280px] mx-auto flex justify-between">
            <div>
                <div v-motion-pop-visible>
                    <h4 class="text-[78px] font-spacemono font-bold leading-[120%] text1">Mediastream</h4>
                    <p class="text-[32px] font-dmsans font-bold leading-[150%] text1 mt-2">2010 - 2013</p>
                </div>
                <div class="max-w-[580px] mt-[48px]">
                    <article class="text-white text-[32px] font-dmsans font-bold leading-[150%] mb-[30px]" v-motion-pop-visible>While I was
                        finishing my studies, Mediastream gave me the opportunity to work in a great team, with projects for
                        big brands.</article>
                    <article class="text-white text-[32px] font-dmsans font-bold leading-[150%]" v-motion-pop-visible>I was lucky to work with
                        @jorlo, one of the best designers I know and he was a great mentor and best friend.</article>
                </div>
                <div class="flex justify-between mt-[48px] max-w-[580px]">
                    <div class="bg-[#282828] rounded-[20px] max-w-[270px]" v-motion-pop-visible>
                        <p class="text-[16px] font-dmsans font-normal leading-[24px] text-white px-5 py-5 h-[120px]" v-motion-pop-visible>
                            Mediastram is one of the
                            most important streaming companies in LATAM</p>
                    </div>
                    <div class="bg-[#282828] rounded-[20px] px-5 py-5 max-w-[270px]" v-motion-pop-visible>
                        <p class="text-[16px] font-dmsans font-normal leading-[24px] text-white" v-motion-pop-visible>I designed digital
                            experiences for Platzi, Claro, Canal 13, TVN & internal products.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="/img/foto3.png" alt="" v-motion-pop-visible>
            </div>
        </div>
        <div class="max-w-[830px] mx-auto flex justify-between mt-[90px]">
            <p class="text-[40px] font-nanum font-normal leading-[100%] uppercase text3 mt-[180px] max-w-[300px]" v-motion-pop-visible>At the same time I started a new
                brand with friends. </p>
            <img src="/img/foto4.png" alt="" v-motion-pop-visible>
        </div>
    </div>
</template>


<style scoped>
.text {
    background: var(--gradient-mint, linear-gradient(270deg, #A9FE81 11.87%, #C0F0FF 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text1 {
    background: var(--gradient-mint, linear-gradient(270deg, #A9FE81 11.87%, #C0F0FF 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text3 {
    background: linear-gradient(358deg, #FEBD81 -20.55%, #FFE598 37.72%, #BFF4A6 98.46%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>