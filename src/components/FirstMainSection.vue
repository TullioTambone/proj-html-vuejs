<script>
export default{
name:'FirstMainSection',

methods:{
}
}
</script>

<template>
    <section class="">
        <img src="/images/home-business-hero-global-image.png" alt="" id="my-rotate-img">
        <div class="first-main-left">
            <h6>New Challenges, New Skills</h6>
            <h2>BUILD YOUR OWN LIFE COACHING BUSINESS</h2>
            <span class="boulder">Whole-Lfife Business Coaching for committed enterpreneurs</span>
            <span class="my-btn mt-3">Get started today</span>
        </div>

        <div class="avatar">
            <img src="/images/home-business-hero-avatar.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
section{
    width: 100%;
    background-color: $mywhite;
    position: relative;
    display: flex;
    height: 90vh;
    #my-rotate-img{
        position: absolute;
        width: 600px;
        left: 50%;
        bottom: null;
        rotate: (-80deg);
    }
    .avatar{
        position: absolute;
        bottom: 0;
        left: 50%;
        img{
            width: 450px;
        }
    }
    .first-main-left{ 
        margin: 10% 0;
        margin-left: 20em;
        width: 25%;
        height: 50%;
        h6{
            color:$giungla;
            font-weight: 600;
        }
        h2{
            font-weight: 700;
            font-size: 35px;
            font-family:Arial, Helvetica, sans-serif;
        }
        .boulder{
            color:$boulder;
        }
        .my-btn{
            text-align: center;
            display:block;
            color: white;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 700;
            width: 180px;
            padding: 12px 18px;
            background-color: $giungla;
            position: relative;
            overflow: hidden;
            transition: 0.8s ease;
            z-index: 1;
            
            &:hover{
                color: white;
            }
            &::before{
                content: '';
                transition: all 0.3s linear;
                background-color: $purple;
                position: absolute;
                bottom:0;
                left: 0;
                border-radius: 50% 50% 0 0;
                width: 100%;
                height: 0%;
                z-index: -1;
            }
            &:hover::before{
                height: 170%;
            }

        }
    }

        
}
</style>