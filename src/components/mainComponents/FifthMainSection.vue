<script>
import { store } from '../../store';
 export default{
    name:'FifthMainSection',
    data(){
        return{
            store,
        }
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
    <div>
        <img src="/images/maxcoach-shape-07.png" alt="" class="layer" data-speed="7" id="dots">
    </div>
    <div class="row justify-content-center p-5">
        <div class="col-12 col-md-12 col-lg-6 p-3">
            <div class="images">
                <img src="/images/home-business-video-poster-670x450.jpg" alt="" class="layer" data-speed="-5">
                <img src="/images/icon-youtube-play.png" alt="" class="youtube layer" data-speed="-5">
            </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 thrive">
            <h2>To Thrive in Business Today, You'll Need a Good Plan</h2>

            <div class="accordion col-12" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fa-solid fa-chevron-down me-2"></i>
                            How can we help?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum accusamus, enim ab consequuntur similique nihil ex voluptate aliquam cupiditate voluptatem sit et error, iste vel ut ullam facere exercitationem.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="fa-solid fa-chevron-down me-2"></i>
                            Why would i need a business COACH?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum accusamus, enim ab consequuntur similique nihil ex voluptate aliquam cupiditate voluptatem sit et error, iste vel ut ullam facere exercitationem.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i class="fa-solid fa-chevron-down me-2"></i>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum accusamus, enim ab consequuntur similique nihil ex voluptate aliquam cupiditate voluptatem sit et error, iste vel ut ullam facere exercitationem.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '../../style/main.scss';
.container-fluid{
    background-color: $charade;
    background-image: url(/images/background-map-dots-top-right-transparent.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 60%;
    position:relative;
    #dots{
        position: absolute;
        bottom:10%;
    }
    .row{
        .images{
            position: relative;
            .youtube{
                position: absolute;
                width: 50px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            img{
                width: 100%;
            }
    
        }
        margin: 0 auto;
        .thrive{
            h2{
                color: white;
                font-weight: 600;
            }
            .accordion{
                .accordion-item{
                    background-color: transparent;
                    border: none;
                    .accordion-header{
                        .accordion-button{
                            color: white;
                            background-color: transparent;
                            border: none;
                            
                        
                            &:focus{
                                box-shadow: none;
                                color: $giungla;
                            }

                            &:focus i{
                                rotate: 180deg;
                                transition: 0.5s;
                            }

                            &::after{
                                z-index: -99;
                                position: absolute;
                            }
                        }
                    }
                }
            }
        }
    }
}
.accordion-body{
    border: none;
    color: white;
}
</style>