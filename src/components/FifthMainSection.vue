<script>
import { store } from '../store';
 export default{
    name:'FifthMainSection',
    data(){
        return{
            store,
            accordios:[
                {
                    controlAccordiom: true
                },
                {
                    controlAccordiom: false,
                },
                {
                    controlAccordiom: false,
                },
            ]
        }
    },
    methods:{
        changeAccordion(a){
            if (a == 'false') {
                a = false
                return a
            } else {
                a = true
                return a
            }
        }
    }

 }
</script>

<template>
<section class="container-fluid">
    <div class="row justify-content-center p-5">
        <div class="col-12 col-md-12 col-lg-6 images p-3">
            <img src="/images/home-business-video-poster-670x450.jpg" alt="">
        </div>
        <div class="col-12 col-md-12 col-lg-6 thrive p-5 ">
            <h2>To Thrive in Business Today, You'll Need a Good Plan</h2>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button @click="changeAccordion(this.accordios[0].controlAccordiom)" :class="(this.accordios[0].controlAccordiom == 'false')?'text-giungla':'text-white'" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                            Why would i need a business COACH?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.text-giungla{
    color: $giungla;
}
.container-fluid{
    background-color: $charade;
    background-image: url(/images/background-map-dots-top-right-transparent.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 60%;

    .row{
        background-image: url(/images/maxcoach-shape-07.png);
        background-repeat: no-repeat;
        background-size: 5%;
        background-position: bottom left;
        .images{
            position: relative;
            img{
                width: 100%;
            }
            &::after{
                content: url(/images/icon-youtube-play.png);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
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
                    color: white;
                    .accordion-header{
                        .accordion-button{
                            background-color: transparent;
                            border: none;
                            
                        
                            &:focus{
                                box-shadow: none;
                            }
                            &::after{
                                z-index: -99;
                                position: absolute;
                            }
                        }
                    }

                    #collapseOne{
                        border: none;
                        .accordion-body{
                            border: none;
                        }
                    }
                }
            }
        }
    }

}
</style>