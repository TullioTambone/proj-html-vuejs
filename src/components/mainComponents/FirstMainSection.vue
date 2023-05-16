<script>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
export default{
    name:'FirstMainSection',
    components:{
        ScrollParallax,
    },
    mounted() {
        const container = this.$refs.parallaxContainer;

        container.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        const container = this.$refs.parallaxContainer;
        container.removeEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
        handleMouseMove(event) {
            const containerRect = this.$refs.parallaxContainer.getBoundingClientRect();
            const mouseX = event.clientX - containerRect.left;
            const mouseY = event.clientY - containerRect.top;

            const layers = document.querySelectorAll('.layer');

            layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const x = (mouseX - containerRect.width / 2) * speed / 100;
            const y = (mouseY - containerRect.height / 2) * speed / 100;

            layer.style.transform = `translate(${x}px, ${y}px)`;
            });
        }
    }
}

</script>

<template>
    <section class="container-fluid" ref="parallaxContainer">
        <div class="my-rotate-img">
            <img src="/images/home-business-hero-global-image.png" alt="">
        </div>
        <ScrollParallax class="first-main-left layer" speed="0.25" data-speed="6">
            <h6>New Challenges, New Skills</h6>
            <h2>BUILD YOUR OWN LIFE COACHING BUSINESS</h2>
            <span class="boulder">Whole-Lfife Business Coaching for committed enterpreneurs</span>
            <span class="my-btn mt-1">Get started today</span>
        </ScrollParallax>
        <ScrollParallax class="avatar layer" direction="x" left="true" data-speed="-4">
            <img src="/images/home-business-hero-avatar.png" alt="">
        </ScrollParallax>
        </section>
</template>

<style lang="scss" scoped>
@import '../../style/main.scss';
section{
    margin-top: 80px;
    background-color: $mywhite;
    position: relative;
    display: flex;
    height: 90vh;
    .my-rotate-img{
        position: absolute;
        width: 50%;
        left: 45%;
        bottom: null;
        animation: rotateAnimation 10s infinite linear;
        img{
            width: 78%;
        }
    }
    .avatar{
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 0;
        img{
            width: 80%;
        }
    }   
    .first-main-left{ 
        position: absolute;
        top: 20%;
        left: 25%;
        width: 30%;
        height: 50%;
        h6{
            color:$giungla;
            font-weight: 600;
        }
        h2{
            font-weight: 700;
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
            cursor: pointer;
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

@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}
}
@media screen and (max-width: 767px) {
    section{
        height: 500px;
        .first-main-left{
            top: 10%;
            h2{
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    section{
        height: 300px;
        .avatar{
            img{
                width: 100%;
            }
        }

        .first-main-left{
            width: 40%;
            left: 10%;
            top: 2%;
            h2{
                font-size: 15px;
            }
            .boulder{
                font-size: 12px;
            }
            .my-btn{
                width: 100px;
                padding: 5px 12px;
                font-size: 10px;
            }
        }

    }
}
</style>