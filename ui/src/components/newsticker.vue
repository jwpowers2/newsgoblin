<template>
  <div id="tickerBox" v-if="network && this.$store.state['ticker'] !== '[]'">
      <div class="headlineBox">
        <transition name="slide-fade">
          <p v-bind:style="{fontSize:size + 'em'}" v-if="show" class="mx-auto m-2">{{ticker[count].agency}}: {{ticker[count].title}}</p>
        </transition>
      </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      
      show:false,
      size:1,
    }
  },
  computed:{
    network(){
      return this.$store.state['network']
    },
    ticker(){
      return this.$store.state['ticker']
    },
    count(){
      return this.$store.state['count']
    },
    mobile(){
      return this.$store.state['mobile']
    }
  },
  methods:{
    startTicker(){
      let _t = this;
      if(_t.mobile == true){_t.size = .75};
      
      setInterval(()=>{

          if(_t.count > _t.ticker.length-1){
            _t.$store.commit('changeCount',-1);
          }

          _t.show = false;
          setTimeout(()=>{
            _t.show = true;
            console.log(_t.count);
            let countTemp = _t.count;
            let new_count = countTemp += 1;
            _t.$store.commit('changeCount', new_count);
          },1000);

      },4000);
    }
  },
  mounted(){
    this.startTicker();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
#nc div{
font-family:'Roboto Mono',sans-serif;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
.headlineBox{
  position:relative;

}
.headlineBox p{
  font-family:'Roboto Mono',sans-serif;
}
#tickerBox{
  position:relative;
  height:60px;
  margin: 0 auto;
   
}
</style>

