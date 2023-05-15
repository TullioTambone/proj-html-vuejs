<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    props:['cardSliderInfo'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {

        300:{
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // 700px and up
        700: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        // 1024 and up
        1024: {
            itemsToShow: 3.55,
            snapAlign: 'center',
        },
    },
  }),
})
</script>
<template>
    <Carousel :itemsToShow="3.3" :wrapAround="true" :transition="500" :autoplay="4000" v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(element, index) in cardSliderInfo" :key="index" class="mb-5">
            <div class="carousel__item">
                <img :src="`${element.img}`" alt="">
                <div class="p-3">
                    <h5>{{ element.title }}</h5>
                    <p>{{ element.text }}</p>
                </div>
                <div class="btn-section border-top">
                    <button> Discover now <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </Slide>
        <template #addons class="m-auto">
            <Pagination />
            <Navigation />
        </template>
    </Carousel>
</template>

<style lang="scss" scoped>

@import '../style/main.scss';
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.carousel__pagination{
    padding-top: 1.5rem;
    background-color: none;
}

h5{
    font-weight: 600;
}

p{
    font-size: 13px;
    color: $boulder;
}

button{
    color: $giungla;
    border: none;
    background: none;
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    padding: 1rem;
    position: relative;
    z-index: 2;
    &:hover{
        color: white;
        transition: all 0.6s linear;
    }
    &::before{
        content: '';
        transition: all 0.3s linear;
        background-color: $giungla;
        position: absolute;
        bottom:0;
        left: 0;
        width: 0%;
        height: 100%;
        border-radius: 0 50% 50% 0;
        z-index: -1;
    }
    &:hover::before{
        width: 100%;
        border-radius: 0
    }
}
.btn-section{
    @include center;
}

img{
    width: 100%;
}
.carousel__item{
    background-color: white;
}
.carousel__slide {
padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
    position: relative;
    z-index: 99;
}

.carousel__track {
transform-style: preserve-3d;
}

.carousel__slide--sliding {
transition: 0.5s;
}

.carousel__slide {
opacity: 0.9;
transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
opacity: 1;
transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
opacity: 1;
transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
opacity: 1;
transform: rotateY(0) scale(1.1);
}
</style>
