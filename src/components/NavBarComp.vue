<script>
import {store} from '../store'
 export default{
    name:'NavBarComp',
    data(){
        return{
            store,
        }
    },
    methods:{
        changeSelect(){
            switch(store.selectValue){
                case "inglese":
                    return '/images/en.png'
                case "francese":
                    return '/images/fr.png'
                case "tedesco":
                    return '/images/de.png'
            }
        }
    }
 } 
</script>

<template>
    <div class="container-xl row">
        <div class="logo col-3">
            <a href="/">
                <img style="width: 150px;" src="/images/dark-logo.png" alt="max logo">
            </a>
        </div>
        <div class="mid-nav col-6">
            <ul class="">
                <li><a href="/">Home <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
                <li><a href="/">Pages <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
                <li><a href="/">Courses <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
                <li><a href="/">Features <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
                <li><a href="/">Blog <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
                <li><a href="/">Shop <i class="fa-solid fa-chevron-down" style="width: 10px;"></i></a></li>
            </ul>
        </div>
        <div class="right-nav col-3">
            <img :src="`${ changeSelect() }`" alt="">
            <select v-model="store.selectValue">
                <option value="inglese">ENGLISH</option>
                <option value="francese">FRENCH</option>
                <option value="tedesco">GERMAN</option>
            </select>
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <i class="fa-solid fa-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-xl{
    margin: 0;
    padding: 0;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $white;
    position: relative;
    z-index: 99;
    .logo{
        @include center
    }
    .mid-nav{
        ul{
            margin: 0;
            @include center;
            li{
                font-size: 15px;
                margin: 0 0.8rem;
            }
        }
    }
    .right-nav{
        display: flex;
        align-items: center;
        select{
            margin-right: 0.5rem;
            border: none;
        }
        .input-group{
            margin-left: 0.5rem;
            input{
                border-left: 1px solid $boulder;
                border-radius: 3px;
                border-top: none;
                border-bottom: none;
                border-right: none;
                outline-color: transparent;
                outline-style: solid;
                &:focus{
                    box-shadow: none;
                }
            }
            button{
                border: none;
                &:hover{
                    background-color: transparent;
                    color: $blue;
                }
            }
        }

    }
}
a{
    color: $charade
}

</style>