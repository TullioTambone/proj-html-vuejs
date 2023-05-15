<script>
import FirstMainSection from './FirstMainSection.vue'
import SecondMainSection from './SecondMainSection.vue';
import ThirdMainSection from './ThirdMainSection.vue';
import FourthMainSection from './FourthMainSection.vue'
import FifthMainSection from './FifthMainSection.vue';
import SixthMainSection from './SixthMainSection.vue';
 export default{
    name:'MainComp',
    components:{
    FirstMainSection,
    SecondMainSection,
    ThirdMainSection,
    FourthMainSection,
    FifthMainSection,
    SixthMainSection
}
 }
</script>

<template>
    <main>
        <div id="side-menu">
            <ul>
                <li>
                    <a>
                        <i class="fa-solid fa-ruler-combined"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="fa-solid fa-globe"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="fa-solid fa-book"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </li>
            </ul>
        </div>

        <FirstMainSection/>
        <SecondMainSection/>
        <ThirdMainSection/>
        <FourthMainSection/>
        <FifthMainSection/>
        <SixthMainSection/>
    </main>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';

main{
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    #side-menu{
        background-color: $white;
        z-index: 999;
        position: fixed;
        top: 5rem;
        right: 0px;
        top: 10em;
        border-radius: 5px;
        box-shadow: -3px 0px 20px 0 lightgrey;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            margin: 0 0.5rem;
            li{
                width: 100%;
                margin: 0.5rem 0;
            }
        }
    }
}

</style>