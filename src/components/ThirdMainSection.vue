<script>
import Autoplay from './CarouselWrapperComp.vue'
export default{
   name:'ThirdMainSection',
   components:{
      Autoplay,
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
            <Autoplay/>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-fluid{
   height: 100vh;
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
         border: 1px solid red;
         height: 500px;
      }
   }
}
</style>