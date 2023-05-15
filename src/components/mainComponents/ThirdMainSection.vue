<script>
import Autoplay from '../CarouselWrapperComp.vue'
export default{
   name:'ThirdMainSection',
   components:{
      Autoplay,

   },
   data(){
      return{
         arraySlider:[
            {
               img:'/images/home-business-service-slide-01-480x298.jpg',
               title:'Consultative Training',
               text:'With a coach off belance, affecting your business in various unconsidered ways.',
            },
            {
               img:'/images/home-business-service-slide-02-480x298.jpg',
               title:'Real Deal Coaching',
               text:'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.',
            },
            {
               img:'/images/home-business-service-slide-03-480x298.jpg',
               title:'Advisor Training Program',
               text:'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.',
            }
         ]
      }
   }
}
</script>

<template>
   <section class="container-fluid">
      <div id="my-container" class="text-center">
         <div class="static-text">
            <h6>Let's Dream Bug Together</h6>
            <h2>Explore How can I help you</h2>
         </div>
         <div class="slider my-3">
            <Autoplay :cardSliderInfo="this.arraySlider"/>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
@import '../../style/main.scss';
.container-fluid{
   padding: 4rem 1rem;
   background-color: $mywhite;
   @include center;
   #my-container{
      margin: 0 auto;
      width: 80%;
      .static-text{
         margin: 0 auto;
         width: 60%;
         text-align: center;
         h6{
            color: $giungla;
         }
         h2{
            font-weight: 700;
         }
      }
      .slider{
         height: 500px;
      }
   }
}
</style>