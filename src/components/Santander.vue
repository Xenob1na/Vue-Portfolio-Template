<template>
    <div>
        <div class="max-w-[1100px] mx-auto mt-[80px] flex justify-between">
            <div>
                <img src="/img/foto10.png" alt="row" v-motion-pop-visible>
                <img src="/img/foto11.png" alt="sticker" class="ml-[80px]" v-motion-pop-visible>
            </div>
            <p class="text-[40px] font-nanum uppercase font-normal leading-[100%] max-w-[354px] text mt-[300px]" v-motion-pop-visible>
                I'm obsessed with design systems
            </p>
        </div>
        <div class="max-w-[1280px] mx-auto flex justify-between mt-[80px]">
            <div class="mt-[80px]">
                <h4 class="text-[78px] font-spacemono font-bold leading-[120%] text " v-motion-pop-visible>
                    Santander</h4>
                <p class="text-[32px] font-dmsans font-bold leading-[150%] text mt-2" v-motion-pop-visible>2016 - 2018</p>
                <article class="text-[32px] font-dmsans font-bold leading-[150%] text-white mt-10 mb-5 max-w-[580px]"
                    v-motion-pop-visible>
                    I worked in digital banking for Santander creating a <span class="text">Design System</span> for the bank's App and website.
                </article>
                <article class="text-[32px] font-dmsans font-bold leading-[150%] text-white mb-5 max-w-[580px]" v-motion-pop-visible>
                    Coordinating with multiple teams and considering the needs across a large organisation was challenging
                    but the end result was a huge improvement In the handoff process.
                </article>
                <article class="text-[32px] font-dmsans font-bold leading-[150%] text-white max-w-[580px]" v-motion-pop-visible>
                    The best thing was the collaborative work with my teammates, <span class="text underline decoration-[#FF4646]">@Nicole</span> <span class="text underline decoration-[#FF4646]">@Osman</span> and <span class="text underline decoration-[#FF4646]">@Tamara</span>
                </article>
                <div class="bg-[#282828] rounded-[20px] px-5 py-5 max-w-[540px] mt-10" v-motion-pop-visible>
                    <p class="text-[16px] font-dmsans font-normal leading-[24px] text-white" v-motion-pop-visible>I designed
                        The design system started very small but little by little it was implemented in most of the bank's digital products</p>
                </div>
            </div>
            <div>
                <img src="/img/foto12.png" alt="mockup" v-motion-pop-visible>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text {
    background: var(--gradient-strawberry, linear-gradient(270deg, #FF4646 11.87%, #FF9486 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>