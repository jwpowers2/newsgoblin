<template>

  <div class="col-xl-7 col-lg-10 col-md-10 col-sm-10 col-xs-10 mx-auto text-center p-4">
    <div class="row">
      <querywindow></querywindow>
    </div>
    <div class="row">
      <newsticker></newsticker>
    </div>
    <div class="row">
      <headlinewindow></headlinewindow>
    </div>
  </div>

</template>

<script>

import headlinewindow from '../components/headlinewindow.vue';
import querywindow from '../components/querywindow.vue';
import newsticker from '../components/newsticker.vue';

export default {

  components:{
    'headlinewindow':headlinewindow,
    'querywindow':querywindow,
    'newsticker':newsticker
  },
  computed: {
    msg(){
      return this.$store.state.msg
    }
  }

}

</script>
