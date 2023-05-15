<script>
 export default{
    name:'Subscribe'
 }
</script>

<template>
<section class="container-fluid">
    <div id="my-container" class="text-center">
        <img src="/images/maxcoach-shape-02.png" alt="" id="image-2">
        <img src="/images/maxcoach-shape-09.png" alt="" id="image-3">
        <div id="image-1"></div>
        <div class="static-text d-flex flex-column justify-content-center align-items-center">
            <div class="title">
                <span class="normal">Subscribe</span><span class="giungla ms-1">Newsletters</span>
            </div>
            <div class="email-subj col-12 col-md-5 col-lg-5">
                <span>Enter your email address to register to our newsletter subscription delivered on a regular basis!</span>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <input name="email" type="email" placeholder="Enter your email" autocomplete="on">
                <button type="submit">Subscribe</button>
            </div>
        </div>
    </div>    
</section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-fluid{
    #my-container{
        padding: 5rem 3rem;
        position: relative;
        #image-1{
            position:absolute;
            border: 5px solid $giungla;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            opacity: 0.6;
            top: 50%;
            left: 15%;
        }
        #image-2{
            position: absolute;
            right: 10%;
            top: 35%;
            width: 100px;
        }

        #image-3{
            position: absolute;
            right: 15%;
            top: 20%;
            width: 150px;
        }
        .static-text{
            position: relative;
            z-index: 99;
            .title{
                .normal{
                    color: black;
                    font-size: 30px;
                    font-weight: 600;
                }
                .giungla{
                    color: $giungla;
                    font-size: 30px;
                    font-weight: 500;
                }
            }

            .email-subj{
                color: gray;
            }

            input{
                width: 300px;
                margin: 2rem 0;
                padding: 10px 20px 10px 15px;
                border-radius: 5px 0 0 5px;
                border: 1px solid $mywhite;
                background-color: $mywhite;
                &:focus-visible{           
                    outline: none;
                    border: 1px solid $giungla;
                    background-color: transparent;
                    transition: 0.8s;
                }
            }
            button{
                padding: 10px 25px;
                border: 1px solid $giungla;
                border-radius: 0 5px 5px 0;
                background-color: $giungla;
                color: white;
                &:hover{
                    background-color: $purple;
                    border: 1px solid $purple;
                    transition: 0.6s;
                }
            }
        }
    }
}
</style>