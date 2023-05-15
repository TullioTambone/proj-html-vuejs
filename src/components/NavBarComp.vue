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

<nav class="navbar navbar-expand-md">
    <div class="container-md">
        <div>                
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img style="width: 150px;" src="/images/dark-logo.png" alt="max logo">
            </a>
        </div>

        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarNav" aria-expanded="offcanvasRight" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        <img style="width: 150px;" src="/images/dark-logo.png" alt="max logo">
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="background"></div>
                    <ul class="navbar-nav me-5">
                        <li class="nav-item border-bottom">
                            <a class="nav-link" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link">
                                Pages
                            </a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link">
                                Courses
                            </a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link">
                                Features
                            </a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link">
                                Shop
                            </a>
                        </li>
                    </ul>

                    <div class="right-nav d-none d-lg-block d-xl-block d-xxl-block">
                        <div class="d-flex justify-content-between align-items-center">
                            <img :src="`${ changeSelect() }`" alt="" style="width: 30px; height: 20px;">
    
                            <select v-model="store.selectValue" class="ms-1">
                                <option value="inglese">ENGLISH</option>
                                <option value="francese">FRENCH</option>
                                <option value="tedesco">GERMAN</option>
                            </select>
            
                            <div class="mx-2 d-inline align-middle">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                <i class="fa-solid fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';

.navbar{
    position: fixed;
    background-color: white;
    box-shadow: 0 1px 30px black;
    z-index: 999999;
    left: 0;
    right: 0;
    height: 80px;
}
.offcanvas-body{
    position: relative;
    z-index: 9999999999999;
}
#background{
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(/images/mobile-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.2;
}
.form-control{
    margin-left: 0.5rem;
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
.btn{
    border: none;
    &:hover{
        background-color: transparent;
        color: $blue;
    }
}
a{
    color: $charade
}

@media screen and (min-width: 768px) {
    #background{
        content: '';
        width: 0;
        height: 0;
    }
    .nav-item{
        border-bottom: none !important;
    }
}
</style>