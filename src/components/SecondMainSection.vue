<script>
 export default{
    name:'SecondMainSection',

    data(){
        return{
            infos: [
                {
                    icon: 'fa-handshake',
                    title: 'One to One',
                    paragrafh: 'Getting the necessary clarity  about the current state to help you improve your game.'
                },
                {
                    icon: 'fa-location-pin',
                    title: 'Anywhere',
                    paragrafh: 'Access to valuable and portable program which alloq you tosetup and live anywhere you whant.'
                },
                {
                    icon: 'fa-stopwatch',
                    title: 'On Time',
                    paragrafh: "Punctuality is our top priority it's an essential criteria to assess a program qualitiy."
                },
                {
                    icon: 'fa-display',
                    title: 'Online Coures',
                    paragrafh: "Online business coaching now offers you a very powerful way to empower your business into success."
                },
                {
                    icon: 'fa-record-vinyl',
                    title: 'Consulting',
                    paragrafh: "You will get a clear sense of direction for your business, through assessment and faster results."
                },
                {
                    icon: 'fa-person-rays',
                    title: 'Self Develop',
                    paragrafh: "Business Coaching often keep your focus and develope you both in a professional and personal way."
                }
            ]
        }
    }
 }
</script>

<template>
    <section class="container-fluid">
        <div id="my-container" class="text-center mt-">
            <div class="static-text">
                <h6>Let's Dream Bug Together</h6>
                <span>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization</span>
            </div>
            <div class="row mt-5">
                <div class="col-12 col-md-6 col-lg-4 mt-3" v-for="(element, index) in this.infos" :key="index">
                    <div class="infos">
                        <div class="d-flex aling-items-center justify-content-center">
                            <i class="fa-solid fs-3 me-2" :class="`${ element.icon }`"></i>
                            <h5>{{ element.title }}</h5>
                        </div>
                        <p>{{ element.paragrafh }}</p>
                    </div>
                </div>
            </div>
            <div class="buttons row justify-content-center">
                <button class="btn-left col-12 col-md-6 col-lg-6 mt-3 ms-1">Learn more</button>
                <button class="btn-right col-12 col-md-6 col-lg-6 mt-3 ms-1">Get started today</button>
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
    padding: 4rem 1rem;
    @include center;
    #my-container{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        .static-text{
            margin: 0 auto;
            width: 60%;
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
            width: 80%;
            .col-4{
                .infos{
                    text-align: left;
                    margin-left: 1rem;
                    p{
                        font-size: 13px;
                        color: $boulder;
                    }
                }
            }
        }
        .buttons{
            .btn-left{
                border: 1px solid silver;
                text-align: center;
                color: $giungla;
                background-color: $white;
                padding: 12px 18px;
                border-radius: 5px;
                font-size: 12px;
                font-weight: 700;
                width: 180px;
                position: relative;
                overflow: hidden;
                transition: 0.5s ease;
                z-index: 1;
                &:hover{
                color: white;
                }
                &::before{
                    content: '';
                    transition: all 0.3s linear;
                    background-color: $purple;
                    position: absolute;
                    top:0;
                    left: 0;
                    border-radius: 0 0 50% 50%;
                    width: 100%;
                    height: 0%;
                    z-index: -1;
                }
                &:hover::before{
                    height: 170%;
                }
            }
            .btn-right{
                border: none;
                text-align: center;
                color: white;
                border-radius: 5px;
                font-size: 12px;
                font-weight: 700;
                width: 180px;
                padding: 12px 18px;
                background-color: $giungla;
                position: relative;
                overflow: hidden;
                transition: 0.5s ease;
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
}
</style>