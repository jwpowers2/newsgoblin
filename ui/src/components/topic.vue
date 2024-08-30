<template>
  <div class="col-xl-7 col-lg-10 text-center border border-info">
    <h2>{{$route.params.name}}</h2>
    <h4>{{msg}}</h4>
  </div>
</template>


<script>

export default {

  computed: {
    msg(){
      return this.$store.state.msg
    }
  }

}

</script>

