<template>
  <div class="col-xl-7 col-lg-10 col-md-10 col-sm-10 text-center border border-primary">
    <h2>{{ $route.params.name }}</h2>
    <h4>{{msg}}</h4>
    <p v-if="$route.params.name === 'CNN'" v-for="ctitle in cnntitles">{{ctitle}}</p>
    <p v-if="$route.params.name === 'MSNBC'" v-for="mtitle in msnbctitles">{{mtitle}}</p>
    <p v-if="$route.params.name === 'Fox News'" v-for="ftitle in foxtitles">{{ftitle}}</p>
  </div>
</template>

<script>

export default {

  computed: {
    msg(){
      return this.$store.state.msg
    },
    cnntitles(){
      return this.$store.state.cnntitles
    },
    msnbctitles(){
      return this.$store.state.msnbctitles
    },
    foxtitles(){
      return this.$store.state.foxtitles
    }
  }

}

</script>

