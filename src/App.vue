<script >
import {store} from './store'
import NavBarComp from './components/NavBarComp.vue';

export default{
  name: "App",
  data() {
      return {
          store
      };
  },
  components: { 
    NavBarComp 
  }
}
</script>

<template>
  <header>
    <NavBarComp/>
  </header>
</template>

<style lang="scss">
@use './style/main.scss' as *;

</style>
