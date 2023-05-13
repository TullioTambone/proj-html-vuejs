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
        data(){
            return{

            }
        }
    })
</script>
<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="(element, index) in cardSliderInfo" :key="index">
            <div class="carousel__item">
                <img :src="`${element.img}`" alt="">
                <h5>{{ element.title }}</h5>
                <p>{{ element.text }}</p>
            </div>
        </Slide>
        <template #addons>
            <Pagination />
            <Navigation />
        </template>
    </Carousel>
</template>


<style scoped>
.carousel__slide {
padding: 5px;
}

.carousel__viewport {
perspective: 2000px;
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
