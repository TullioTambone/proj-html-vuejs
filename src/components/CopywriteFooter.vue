<script>
 export default{
    name:'Copy'
 }
</script>

<template>
<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-6 primo-blocco mt-4">
                <h6>Address</h6>
                <span class="d-block">382 NE 191st St # Miami, FL 33179-3899</span>
                <span class="d-block my-2">+1(305)547-9909 (9am - 5pm ESt, Monday - Friday)</span>
                <span class="d-block mb-3">Support@maxcoach.com</span>
                <span class="white me-2"><i class="fa-brands fa-square-facebook"></i></span>
                <span class="white mx-2"><i class="fa-brands fa-twitter"></i></span>
                <span class="white mx-2"><i class="fa-brands fa-instagram"></i></span>
                <span class="white ms-2"><i class="fa-brands fa-linkedin"></i></span>
            </div>
            <div class="col-12 col-md-6 col-lg-6 secondo-blocco mt-4">
                <div class="row">
                    <div class="col-4">
                        <h6>Explore</h6>
                        <span class="d-block"><a href="">Start here</a></span>
                        <span class="d-block"><a href="">Blog</a></span>
                        <span class="d-block"><a href="">About us</a></span>
                    </div>
                    <div class="col-4 mt-4">
                        <span class="d-block"><a href="">Success story</a></span>
                        <span class="d-block"><a href="">Courses</a></span>
                        <span class="d-block"><a href="">Contact us</a></span>
                    </div>
                    <div class="col-4">
                        <h6>Information</h6>
                        <span class="d-block"><a href="">Membership</a></span>
                        <span class="d-block"><a href="">Purchasse guide</a></span>
                        <span class="d-block"><a href="">Privacy policy</a></span>
                        <span class="d-block"><a href="">Terms of service</a></span>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center copy mt-5">&copy;2020 Maxcoach. All Rights Reserved</div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-fluid{
    background-color: $charade;
    color: white;
    .container{
        padding: 2rem 5rem;
        .primo-blocco{
            h6{
                font-weight: 600;
            }
            span{
                color: gray;
                font-size: 12px;
            }
            .white{
                font-size: 20px;
                &:hover{
                    color: white;
                }
            }
        }
        .secondo-blocco{
            .row{
                .col-4{
                    span{
                        a{
                            color: gray;
                            font-size: 12px;
                        }
                        &:hover a{
                            color: white;
                        }
                    }
                }
            }
        }

        .copy{
            color: gray;
            font-size: 12px;
        }
    }
}


</style>