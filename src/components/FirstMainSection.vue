<script>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
export default{
    name:'FirstMainSection',
    components:{
        ScrollParallax,
    },
    methods:{
    }
}

</script>

<template>
    <section class="">
        <div class="my-rotate-img">
            <img src="/images/home-business-hero-global-image.png" alt="">
        </div>
        <ScrollParallax class="first-main-left " speed="0.25">
            <h6>New Challenges, New Skills</h6>
            <h2>BUILD YOUR OWN LIFE COACHING BUSINESS</h2>
            <span class="boulder">Whole-Lfife Business Coaching for committed enterpreneurs</span>
            <span class="my-btn mt-3">Get started today</span>
        </ScrollParallax>
        <ScrollParallax class="avatar" direction="x" left="true">
            <img src="/images/home-business-hero-avatar.png" alt="">
        </ScrollParallax>
        </section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
section{
    width: 100%;
    background-color: $mywhite;
    position: relative;
    display: flex;
    height: 90vh;
    .my-rotate-img{
        position: absolute;
        width: 550px;
        left: 50%;
        bottom: null;
        rotate: (-80deg);
    }
    .avatar{
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 0;
        img{
            width: 400px;
        }
    }   
    .first-main-left{ 
        position: absolute;
        margin-top: 15em;
        margin-left: 20em;
        width: 30%;
        height: 50%;
        h6{
            color:$giungla;
            font-weight: 600;
        }
        h2{
            font-weight: 700;
            font-size: 35px;
            font-family:Arial, Helvetica, sans-serif;
        }
        .boulder{
            color:$boulder;
        }
        .my-btn{
            text-align: center;
            display:block;
            color: white;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 700;
            width: 180px;
            padding: 12px 18px;
            background-color: $giungla;
            position: relative;
            overflow: hidden;
            transition: 0.8s ease;
            z-index: 1;
            
            &:hover{
                color: white;
            }
            &::before{
                content: '';
                transition: all 0.3s linear;
                background-color: $purple;
                position: absolute;
                bottom:0;
                left: 0;
                border-radius: 50% 50% 0 0;
                width: 100%;
                height: 0%;
                z-index: -1;
            }
            &:hover::before{
                height: 170%;
            }

        }
    }
}
</style>