<script >
import {store} from './store'
import NavBarComp from './components/NavBarComp.vue';
import MainComp from './components/MainComp.vue';

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
  }
}
</script>

<template>
  <header>
    <NavBarComp/>
  </header>

  <MainComp/>

</template>

<style lang="scss">
@import './style/main.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
