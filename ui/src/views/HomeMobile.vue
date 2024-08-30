<template>
  <div>
    
  <div class="row">
    <router-view></router-view>
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
    'nsheader':nsheader
  }
}
</script>