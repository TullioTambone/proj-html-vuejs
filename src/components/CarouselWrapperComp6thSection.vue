<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data: () => ({

        cards:[
            {
                title:'High level of efficiency and scientific teaching methods',
                commento:'i am free to learn lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque hic culpa totam, voluptatem necessitatibus eius veniam officiis',
                img:'/images/',
                nome:'MINA HOLLACE',
                job:'Freelancer',
            },
            {
                title:'The MaxCoach team work really hard to ensure high quality',
                commento:'i am free to learn lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque hic culpa totam, voluptatem necessitatibus eius veniam officiis',
                img:'/images/',
                nome:'LUVIC DUBBLE',
                job:'Private Tutor',
            },
            {
                title:"it's a choice of quality for people with special needs",
                commento:'i am free to learn lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque hic culpa totam, voluptatem necessitatibus eius veniam officiis',
                img:'/images/',
                nome:'FLORANCE THEMES',
                job:'Multimedia Admin',
            },
            {
                title:'High level of efficiency and scentific teaching methods',
                commento:'i am free to learn lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque hic culpa totam, voluptatem necessitatibus eius veniam officiis',
                img:'/images/',
                nome:'MINA HOLLACE',
                job:'Freelancer',
            },
        ],
        // carousel settings
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {

            300:{
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 2.3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>
<template>
    <Carousel :itemsToShow="3.3" :wrapAround="true" :transition="500" :autoplay="4000" v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(element, index) in this.cards" :key="index" class="mb-5">
            <div class="carousel__item p-1">
                <h6 id="title">{{ element.title }}</h6>
                <p id="commento">
                    {{ element.commento }}
                </p>
            </div>
        </Slide>
        <template #addons class="m-auto">
            <Pagination />
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
#title{
    color: $tuna;
    font-weight: 600;

}

#commento{
    font-size: medium;
    color:$boulder;
}
.carousel__item{
    background-color: white;
}

.carousel__pagination{
    padding-top: 1.5rem;
    background-color: none;
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
