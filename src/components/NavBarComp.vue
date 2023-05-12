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
                    return '../../public/images/en.png'
                case "francese":
                    return '../../public/images/fr.png'
                case "tedesco":
                    return '../../public/images/de.png'
            }
        }
    }
 } 
</script>

<template>
    <div class="container-fluid row">
        <div class="logo col-3">
            <a href="/">
                <img style="width: 150px;" src="/images/dark-logo.png" alt="max logo">
            </a>
        </div>
        <div class="mid-nav col-6">
            <ul class="">
                <li><a href="/">Home <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
                <li><a href="/">Pages <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
                <li><a href="/">Courses <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
                <li><a href="/">Features <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
                <li><a href="/">Blog <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
                <li><a href="/">Shop <font-awesome-icon icon="fa-solid fa-chevron-down" style="width: 10px;"/></a></li>
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
                <font-awesome-icon icon="fa-regular fa-circle-user"/>
            </div>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <font-awesome-icon icon="fa-solid fa-search"/>
                </button>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-fluid{
    margin: 0;
    padding: 0;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
        @include center
    }
    .mid-nav{
        ul{
            margin: 0;
            @include center;
            li{
                font-size: 15px;
                list-style-type: none;
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