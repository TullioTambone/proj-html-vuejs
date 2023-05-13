<script>
 export default{
    name:'SecondMainSection',
    data(){
        return{
            infos: [
                {
                    icon: '',
                    title: 'One to One',
                    paragrafh: 'Getting the necessary clarity  about the current state to help you improve your game.'
                },
                {
                    icon: '',
                    title: 'Anywhere',
                    paragrafh: 'Access to valuable and portable program which alloq you tosetup and live anywhere you whant.'
                },
                {
                    icon: '',
                    title: 'On Time',
                    paragrafh: "Punctuality is our top priority it's an essential criteria to assess a program qualitiy."
                },
                {
                    icon: '',
                    title: 'Online Coures',
                    paragrafh: "Online business coaching now offers you a very powerful way to empower your business into success."
                },
                {
                    icon: '',
                    title: 'Consulting',
                    paragrafh: "You will get a clear sense of direction for your business, through assessment and faster results."
                },
                {
                    icon: '',
                    title: 'Self Development',
                    paragrafh: "Business Coaching often keep yoour focus and develop you both in a professiona and personal way."
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
                <span>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization</span>
            </div>
            <div class="row">
                <div class="col-4 d-flex justify-content-between" v-for="(element, index) in this.infos">
                    <div>
                        <img src="" alt="">img
                    </div>
                    <div class="">
                        <h5>{{ element.title }}</h5>
                        <p>{{ element.paragrafh }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as*;

img{
    width: 100%;
}
.container-fluid{
    height: 100vh;
    #my-container{
        margin: 5rem auto;
        width: 80%;
        .static-text{
            margin: 0 auto;
            width: 50%;
            h6{
                color: $giungla;
            }
            span{
                font-weight: 900;
                font-size: 20px;
            }
        }

        .row{
            margin: 0 auto;
            width: 90%;
            border: 1px solid red;
            .col-4{
                h6{

                }
                p{
                    font-size: 13px;
                    color: $boulder;
                }
            }
        }
    }
}
</style>