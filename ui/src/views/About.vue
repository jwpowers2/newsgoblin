<template>
  <div>
    <nsheader></nsheader>
    
  <div class="row">
    <div class="col-lg-1"></div>
    <nsabout></nsabout>
    <div class="col-lg-1"></div>
  </div>

  </div>
</template>
<script>
import nsheader from '../components/nsheader.vue';
import nsabout from '../components/nsabout.vue';


export default {

  components: {
    'nsheader':nsheader,
    'nsabout':nsabout
  }
}
</script>