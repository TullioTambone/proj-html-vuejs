<script >
import {store} from './store'
import NavBarComp from './components/NavBarComp.vue';
import MainComp from './components/MainComp.vue';
import Subscribe from './components/SubscribeFooterComp.vue'
import Copy from './components/CopywriteFooter.vue'

export default{
  name: "App",
  data() {
      return {
          store
      };
  },
  components: { 
    NavBarComp,
    MainComp,
    Subscribe,
    Copy
  }
}
</script>

<template>
  <header id="head">
    <NavBarComp/>
  </header>

  <MainComp/>
  <footer>
    <a id="go-up" href="#head">&UpArrow;</a>
    <Subscribe/>
    <Copy/>
  </footer>

</template>

<style lang="scss">
@import './style/main.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer{
  position: relative;
  #go-up{
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 30px;
    background-color: $giungla;
    @include center;
    color: white;
    font-size: 25px;
    font-weight: 800;
    cursor: pointer;
  }
}

</style>
