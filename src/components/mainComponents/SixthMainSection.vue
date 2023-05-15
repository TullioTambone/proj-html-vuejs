<script>
import Autoplay from '../CarouselWrapperComp6thSection.vue'
 export default{
    name:'SixthMAinSection',
    components:{
        Autoplay
    },
    data(){
        return{
            arrayEvents: [
                {
                    luogo:'Texas, US',
                    event:'Storytelling Workshop',
                    number: '22',
                    mese: 'NOV',
                },
                {
                    luogo:'New York, US',
                    event:'Painting Art Contest 2020',
                    number: '10',
                    mese: 'OCT',
                },
                {
                    luogo:'Hamburg, Germany',
                    event:'International Art Fair 2020',
                    number: '23',
                    mese: 'NOV',
                },
                {
                    luogo:'Illinois, US',
                    event:'Street Performance: Call for Artist',
                    number: '15',
                    mese: 'DEC',
                },
                {
                    luogo:'Illinois, US',
                    event:'Consumer Food Safety Education Conference',
                    number: '22',
                    mese: 'JUL',
                },
                {
                    luogo:'Dubai',
                    event:'How meditation improve your mental health?',
                    number: '12',
                    mese: 'AUG',
                },
            ]
        }
    }
 }
</script>

<template>
<section class="container-fluid first-section">
    <div class="border-container pt-5 d-flex flex-column  align-items-center">
        <div class="static-text text-center">
            <h6>Wanna transform your life?</h6>
            <h2 class="mt-3">Upcoming Events</h2>
        </div>

        <div class="row mt-5">
            <div class="my-card d-flex justify-content-between" v-for="(element, index) in arrayEvents">
                <div class="w-75">
                    <span class="luogo">
                        <i class="fa-solid fa-location-dot"></i>
                        {{ element.luogo }}
                    </span>
                    <h5 class="mt-2 event">{{ element.event }}</h5>
                </div>
                <div class="d-flex flex-column align-items-center ms-1">
                    <span class="numbers">{{ element.number }}</span>
                    <span class="mese">{{ element.mese }}</span>
                    <button>Get ticket</button>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="container-fluid second-section">
    <div class="border-container py-5">
        <div class="static-text text-center">
            <h6>People are praising Maxcoach</h6>
            <h2>What make they love us?</h2>
        </div>

        <div class="container-fluid">
            <Autoplay/>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '../../style/main.scss';

.first-section{
    background-color: $mywhite;
    padding: 0;
    .border-container{
        background-color: white;
        border-radius: 0 0 110em/12em 0;
        .static-text{
            h6{
                color: $giungla;
                font-weight: 600;
            }
            h2{
                font-weight: 600;
            }
        }
        .row{
            gap: 20px;
            padding-bottom: 10rem;
            padding-left: 2rem;
            padding-right: 2rem;
            .my-card{
                padding: 15px;      
                border-radius: 5px;
                background-color: $mywhite;
                flex-basis: calc(100% / 2 - 20px);

                div{
                    .event{
                        font-weight: 600;
                        font-size: medium;
                    }
                    .luogo{
                        color: $boulder;
                    }
                    .numbers{
                        color: $giungla;
                        font-size: 30px;
                        font-weight: 500;
                    }

                    .mese{
                        font-weight: 600;
                        font-size: 13px;
                    }
                    button{
                        padding: 10px 25px;
                        font-size: 12px;
                        border:none;
                        border-radius: 10px;
                        background-color: $giungla;
                        color: white;
                    }
                }

                &:hover{
                    border-left: 3px solid $giungla;
                    background-color: $white;
                    box-shadow: 0 0 40px lightgray;
                    transition: 0.1s;
                }

                &:hover button{
                    color: white;
                    background-color: $purple;
                    transition: 0.4s;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .first-section{
        .border-container{
            .row{
                .my-card{
                    flex-basis: 100%
                }
            }
        }
    }
}

.second-section{
    background-color: $mywhite;

    .border-container{
        .static-text{
            h6{
                color: $giungla;
                font-weight: 600;
            }
            h2{
                font-weight: 700;
            }
        }
    }
}
</style>