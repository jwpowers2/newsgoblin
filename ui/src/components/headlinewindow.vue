<template>
<div class="headlines" v-if="show">
  <h2>{{network}} headlines</h2>
  
      <table class="article_count">
        <tr>
        <td v-for="t in networkLength" v-bind:key="t">
          <span class="text-lg m-1" v-if="t >= 2">.</span>
          <span v-if="count === t-1" class="text-lg m-1">{{t}}</span>
        </td>
        </tr>
      </table>
 
  <div>
    <v-touch ref="swiper" @swipeleft="sl" @swiperight="sr">
      <a v-bind:href="media[count].url" target="_blank"><div v-if="media[count].urlToImage" id="ix" v-bind:style="{backgroundImage:'url(' + media[count].urlToImage + ')'}"></div><div v-else id="ix">
      <svg id="elsesvg" height="70" width="70">
        <polygon points="10,0 60,0 60,40 50,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:red;stroke:white;stroke-width:5;"/>
        <polygon points="10,50 60,50 60,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:red;stroke:white;stroke-width:5;">
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.2s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="0.5s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.7s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="1s" fill="freeze"/>
        </polygon>
        <circle cx="30" cy="10" r="5" style="fill:white;stroke:black;stroke-width:2;" />
        <circle cx="30" cy="10" r="2" style="fill:black;" />
        <polygon points="45,40 50,30 55,40" style="fill:white;"/>
      </svg></div></a>
    </v-touch>
    <p>
      {{media[count].title}}
    </p>
    <div class="progress_wrapper">
      <div v-bind:style="{visibility:isVisible}">
        <div v-on:click="changeCount('-')" class="col-xl-2 col-lg-2 col-md-2 col-xs-2">previous</div>
        <div v-on:click="changeCount('+')" class="col-xl-2 col-lg-2 col-md-2 col-xs-2">next</div>
      </div>
    </div>
  </div>

</div>
  
</template>

<script>

import axios from 'axios';
import {computed, watch} from 'vue';
import { mapState } from 'vuex';

export default {
  
  setup() {
    const media = computed(()=> {return this.$store.state['media'] })
    //const network = computed(()=> {
    //  return this.$store.state['network']
    //})
    /*
    const networkLength = computed(()=> {
    if(this.network){
        return this.$store.state['media'].length
      } else {
        return 0
      }
    })
      */
    const mobileState = computed(()=> {return this.$store.state.mobile})
    const network = computed(() => {mapState(['network'])})
  },
  props: {
    showHeadlines: Boolean,
    networkProp: String
  },
  data(){

    return {
      count:0,
      isVisible:'',
      show: true,
      network: '',
    }
  },
  methods:{
    changeCount(movement){
        if(movement === '-' && this.count !== 0)this.count--;
        if(movement === '+' && this.count < (this.networkLength-1))this.count++;

    },
    sl(){
      this.changeCount("-");
    },
    sr(){
      this.changeCount("+");
    },
    homeReady(){
      if(this.$store.state.mobile){
        this.isVisible = 'hidden';
      } else {
        this.isVisible = 'visible';
      }

    },
    async getData(networkProp){
      console.log("Fire GET DATA fetch")
      let _t = this;
      //if (_t.network){
        const url = `http://localhost:5000/api/media/${networkProp}`
        try {
            const respone = await fetch(url)
            const json = response.json()
            if(json.data.error){
              console.log(json.data.error);
            } else {
              _t.$store.commit('changeTicker', json.data.ticker);
              _t.$store.commit('changeMedia', JSON.parse(json.data.media));
              _t.count = 0;

            }
        } catch (error) {
            console.log(error)
        }

        /*
        axios.get(`http://localhost:5000/api/media/${_t.network}`)
        .then(function(response){
          if(response.data.error){
            console.log(response.data.error);
          } else {
            _t.$store.commit('changeTicker', response.data.ticker);
            _t.$store.commit('changeMedia', JSON.parse(response.data.media));
            _t.count = 0;

          }
        })
        .catch(function(error){
          console.log(error);
        });
        */
      //}
    }
  },
  watch: {
    showHeadlines: function(oldVal, newVal){
      this.show = newVal;
      console.log(newVal)
    },
    networkProp: function(){
      console.log("watcher fires")
      this.getData(networkProp)
      console.log("data has been gotten")
    }
  },
  created(){
    this.homeReady();
  }

}
</script>

<style>
#ix{
height:14em;
width:20em;
background-size:cover;
background-repeat:no-repeat;
margin: 0 auto;
object-fit:cover;
}
#elsesvg{
margin: 5em auto;
}
.headlines{
  padding:1em;
  margin: 0 auto;
}
.progress_wrapper{
  height:25px;
  width:300px;
  margin: 10px auto;
}
.progress_wrapper div{
  width:100px;
  display:inline;
}
.article_count{
 margin:0 auto;
}
</style>

