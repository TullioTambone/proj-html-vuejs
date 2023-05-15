<script>
 export default{
    name:'FourthMainSection',
    data(){
        return{
            arrayCards: [
                {
                    img:'/images/course-02-443x600.jpg',
                    price: '40.00',
                    title: 'Learning to Write as a Professional Author',
                    lessons: '20',
                    students: '50',
                    purpose: 'The purpose of this course is Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                },
                {
                    img:'/images/stock-full-hd-03-443x600.jpg',
                    price: 'Free',
                    title: 'Customer-centric info-Tech Strategies',
                    lessons: '15',
                    students: '60',
                    purpose: 'The purpose of this course is Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                },
                {
                    img:'/images/stock-full-hd-04-443x600.jpg',
                    price: '19.00',
                    title: 'Open Programming Courses for Everyone: Python',
                    lessons: '30',
                    students: '40',
                    purpose: 'The purpose of this course is Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                },
                {
                    img:'/images/stock-full-hd-06-443x600.jpg',
                    price: '26.00',
                    title: 'Academic Listening and note-taking',
                    lessons: '18',
                    students: '25',
                    purpose: 'The purpose of this course is Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                },
            ]
        }
    }
 }
</script>

<template>
<section class="container-fluid">
    <div class="container">
        <div class="static-text text-center">
            <h6>Let's Dream Bug Together</h6>
            <h2>Explore How can I help you</h2>
        </div>
        <div class="row justify-content-between">
            <div id="cards"  v-for="(element, index) in arrayCards" :key="index">
                <img :src="`${element.img}`" alt="">
                <div class="infos">
                    <h6>&dollar; {{ element.price }}</h6>
                    <h5>{{ element.title }}</h5>
                    <div class="active">
                        <span><i class="fa-solid fa-note-sticky me-1"></i>{{ element.lessons }}</span>
                        <span class="ms-3"><i class="fa-solid fa-users me-1"></i>{{ element.students }}</span>
                        <p>{{ element.purpose }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="static-text text-center">
            <span>Take the control of their life back and start doing things to make their dream come true. <a href=""><strong>View all courses &#x2192;</strong></a></span>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
.container-fluid{
    padding: 5rem;
    margin: 0;
    .container{
        margin: 0;
        max-width: 100%;
        .static-text{
            width: 50%;
            margin: auto;
            h6{
                color: $giungla;
            }
            h2{
                font-weight: 700;
            }
            span{
                a{
                    color: black;
                }
            }
        }
        .row{
            margin: 50px auto;
            justify-content: center;
            gap: 10px;
            #cards{
                flex-basis: calc(100% / 4 - 10px);
                margin-top: 5px;
                padding: 0;
                background-color: black;
                border-radius: 10px 10px 0 0;
                position: relative;
                img{
                    border-radius: 10px 10px 0 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.8;
                    display: block;
                }
    
                .infos{
                    position: absolute;
                    bottom: 0px;
                    padding: 5px;
                    h6{
                        color: $giungla;
                        font-weight: 600;
                    }
                    h5{
                        font-size: 14px;
                        font-weight: 600;
                        color: white;
                    }
                    .active{
                        color: white;
                        opacity: 0;
                        display: none;
                        p{
                            font-size: 13px;
                        }
                    }
                }
                &:hover .active{
                    transition: 0.5s;
                    transition-delay: 0.2s;
                    opacity: 100%;
                    display: block;
                }
                
                &:hover .infos{
                    transition: 0.3s linear;
                    bottom: 0;
                }
    
                &:hover img{
                    transition: 0.3s;
                    opacity: 0.4;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .container-fluid{
        .container{
            .row{
                #cards{
                    flex-basis: calc(100% / 2 - 10px);
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .container-fluid{
        .container{
            .row{
                #cards{
                    flex-basis: calc(100%);
                }
            }
        }
    }
}
</style>