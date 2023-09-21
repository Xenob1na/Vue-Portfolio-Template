<template>
    <div class="max-w-[1280px] mx-auto mt-[80px] flex justify-between">
        <div>
            <div>
                <h4 class="text-[78px] font-spacemono font-bold leading-[120%] text mb-10" v-motion-pop-visible>
                    Today</h4>
                <article class="text-[32px] font-dmsans font-bold leading-[150%] text-white max-w-[550px] mb-10" v-motion-pop-visible>
                    I want to lead ux projects remotely and move to the south of Chile with my girlfriend Mari and our
                    kittens.
                </article>
            </div>
            <div>
                <img src="/img/South.png" alt="South" v-motion-pop-visible>
            </div>
        </div>
        <div>
            <img src="/img/South1.png" alt="South" v-motion-pop-visible>
        </div>
    </div>
</template>

<style scoped>
.text {
    background: var(--gradient-grape, linear-gradient(270deg, #DBA6F4 11.87%, #A981FE 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>