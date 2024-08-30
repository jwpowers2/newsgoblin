<template>
  <div>
    
  <div class="row">
    <div class="col-lg-1"></div>
    <router-view></router-view>
    <div class="col-lg-1"></div>
  </div>

  </div>
</template>
<script>
import nsheader from '../components/nsheader.vue';


export default {

  data(){
    return{
      networkName: 'CNN'
    }
  },
  components: {
    'nsheader':nsheader,
  }
}
</script>