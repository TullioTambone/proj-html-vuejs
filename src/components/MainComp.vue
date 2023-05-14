<script>
import FirstMainSection from './FirstMainSection.vue'
import SecondMainSection from './SecondMainSection.vue';
import ThirdMainSection from './ThirdMainSection.vue';
import FourthMainSection from './FourthMainSection.vue'
import FifthMainSection from './FifthMainSection.vue';
 export default{
    name:'MainComp',
    components:{
    FirstMainSection,
    SecondMainSection,
    ThirdMainSection,
    FourthMainSection,
    FifthMainSection
}
 }
</script>

<template>
    <main>
        <div id="side-menu">
            <ul>
                <li>
                    <a href="#Second">
                        <i class="fa-solid fa-ruler-combined"></i>
                        <span class="active">Get started</span>
                    </a>
                </li>
                <li>
                    <a href="#Third">
                        <i class="fa-solid fa-globe"></i>
                        <span class="active">Discover</span>
                    </a>
                </li>
                <li>
                    <a href="#Fourth">
                        <i class="fa-solid fa-book"></i>
                        <span class="active">Courses</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="active">Shop</span>
                    </a>
                </li>
            </ul>
        </div>

        <FirstMainSection id=""/>
        <SecondMainSection id="Second"/>
        <ThirdMainSection id="Third"/>
        <FourthMainSection id="Fourth"/>
        <FifthMainSection/>
    </main>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
main{
    #side-menu{
        background-color: $white;
        z-index: 99999999;
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
                a{
                    display: flex;
                    justify-content: flex-start;
                    
                    color: $charade;
                    .active{
                        display: none;
                    }
                }
            }
        }

        &:hover .active{
            display: inline-block;
            margin-left: 5px;
        }

    }
}

</style>