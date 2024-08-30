<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'

export default {
  store,  
  methods: {
      isMobile() {
          if( screen.width <= 1250 ) {
            this.$store.commit('isMobile',true);
            this.$router.push('/homeMobile');
          } else {
            this.$store.commit('isMobile',false);
            this.$router.push('/');
          }
      }
  },
  created() {
      this.isMobile();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
*{
  font-family:'Josefin Sans',sans-serif;
}
body{
    background: transparent;
  background-image:
    radial-gradient(#f2f2f2 20%, transparent 0), 
    radial-gradient(#f2f2f2 20%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}
</style>
