<script>
import FirstMainSection from './FirstMainSection.vue'
 export default{
    name:'MainComp',
    components:{
        FirstMainSection,
    }
 }
</script>

<template>
    <main>
        <div id="side-menu">
            <ul>
                <li>
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-ruler-combined"/>
                        <span class="active">Pages</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-globe"/>
                        <span class="active">Blog</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-book"/>
                        <span class="active">Courses</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
                        <span class="active">Shop</span>
                    </a>
                </li>
            </ul>
        </div>

        <FirstMainSection/>
    </main>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
main{
    #side-menu{
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