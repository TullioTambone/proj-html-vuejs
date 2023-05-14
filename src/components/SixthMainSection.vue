<script>
 export default{
    name:'SixthMAinSection',
    data(){
        return{
            arrayEvents: [
                {
                    number: '22',
                    mese: 'NOV',
                },
                {
                    number: '10',
                    mese: 'OCT',
                },
                {
                    number: '23',
                    mese: 'NOV',
                },
                {
                    number: '15',
                    mese: 'DEC',
                },
                {
                    number: '22',
                    mese: 'JUL',
                },
                {
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
            <div class="my-card col-12 col-lg-6 d-flex justify-content-between" v-for="(element, index) in arrayEvents">
                <div>
                    <span>{{  }}</span>
                    <h5 class="mt-2"></h5>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="numbers">{{ element.number }}</span>
                    <span class="mese">{{ element.mese }}</span>
                    <button>Get ticket</button>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="container-fluid second-section">
    <div class="border-container pt-5">
        <div class="static-text text-center">
            <h6>People are praising Maxcoach</h6>
            <h2>What make they love us?</h2>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';

.first-section{
    background-color: $mywhite;
    padding: 0;
    .border-container{
        background-color: white;
        height: 80vh;
        border-radius: 0 0 50% 0;
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
            .my-card{
                background-color: $mywhite;
            }
        }
    }
}

.second-section{
    height: 20vh;
    background-color: $mywhite;
}
</style>