<template>

<div id="myquerywindow">

  <div class="news_form_container">
    <a href="/" class="logo">
      <svg id="svg" height="70" width="70">
        <polygon points="10,0 60,0 60,40 50,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:green;stroke:white;stroke-width:5;"/>
        <polygon points="10,50 60,50 60,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:green;stroke:white;stroke-width:5;">
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.2s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="0.5s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.7s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="1s" fill="freeze"/>
        </polygon>
        <circle cx="30" cy="10" r="5" style="fill:white;stroke:black;stroke-width:2;" />
        <circle cx="30" cy="10" r="2" style="fill:black;" />
        <polygon points="45,40 50,30 55,40" style="fill:white;"/>
      </svg>
    </a>
  <h2 id="stock_profile_name"><strong>newsgoblin</strong></h2>
    <div class="autocomplete">
      <input
        type="text" 
        v-bind:value="search"
        v-on:input="search= $event.target.value"
        @input="onChange()"
        @keydown.down="onArrowDown" 
        @keydown.up="onArrowUp" 
        @keydown.enter="onEnter" 
        class="dash_name_input" 
        placeholder="a news outlet or topic" 
        autocomplete="off"
      />
      <ul
        v-show="isOpen"
        class="autocomplete-results"
      >
        <li
          class="loading"
          v-if="isLoading"
        >
          Loading results...
        </li>
        <li
          v-else
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          class="autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
      </ul>
    <button type="button" class="close" @click="clearInput()">
      <span class="clearIcon rounded-circle">&times;</span>
    </button>    
    </div>
  </div>
 
</div>

</template>

<script>
import headlinewindow from './headlinewindow';

export default {

  name: 'autocomplete',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  
    isAsync: {
      type:Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    headlinewindow
  },
  data() {
    return {
      isOpen: false,
      showHeadlines: true,
      network: "",
      results: [],
      search:'',
      isLoading: false,
      arrowCounter: -1,
    };
  },
  methods:{
    clearInput(){
      this.search = '';
      //this.$store.commit('changeMedia','{}');
      this.$store.commit('changeMedia', '{}')
      //this.$store.commit('changeNetwork', '');
      //this.$store.commit('changeNetwork', '')
      this.network = ""
      this.$store.commit('changeTicker', '[]');
      // need to reset count to -1
      this.$store.commit('changeCount',-1);
    },
    onChange(){
      this.$emit('input', this.search);
      if (this.isAsync){
        
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    }, 
    filterResults(){
      this.results = this.$store.state['mediaList'].find(this.search.toLowerCase());
    },
    setResult(result){
      this.search = result;
      //this.$store.commit('changeNetwork', result);
      this.network = result;
      console.log("Network has been changed")
      this.isOpen = false;
      this.showHeadlines = true;
    },
    onArrowDown(evt) {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
    },
    onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
    },
    onEnter() {
        this.search = this.results[this.arrowCounter];
        //this.$store.commit('changeNetwork', this.search);
        this.$store.commit('changeNetwork', this.search);
        this.isOpen = false;
        this.arrowCounter = -1;
    },
    handleClickOutside(evt){
        if (!this.$el.contains(evt.target)) {
          this.isOpen = false;
          this.arrowCounter = -1;
        }
    },
    styleForMobile(){
      let isMobile = this.$store.state['mobile'];
      if (isMobile){
        document.getElementById('myquerywindow').style.marginTop = "0px";
      }
    }
    },
    watch: {
      items: function (val, oldValue) {
        // actually compare them
        if (val.length !== oldValue.length) {
          this.results = val;
          this.isLoading = false;
        }
      },
    },
    mounted() {
      // use this method if using advertising windows version
      //this.styleForMobile();
      document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    }
 
}

</script>


<style>
button{
  outline:none !important;
}

#stock_profile_name{
  margin:0auto;
  text-align:center;
}

#myquerywindow{
margin-top: 10px;
margin-left: auto;
margin-right: auto;
position:relative;
text-align:center;
}

.dash_name_input{
  width: 12em;
  height: 2em;
  border-radius: 5px;
  font-size:2em;
  display:inline-block;
  margin:0 auto;
  text-align:center;
}


.news_form_container{
  text-align:center;
  width:40em;
  height:100px;
  margin: 0 auto;
  font-size:.8em;  
  position:relative;
  /*border-bottom:2px solid red;*/
  display:inline;
}

.search_button{
  background-color: red;
  border-radius: 5px;
  color:white;
  height: 2em;
  padding: 1.3em 3em 2.3em 1em;
  width: 2em;
  vertical-align:center; 
  display:inline-block;
}
  .autocomplete {
    position: relative;
    display:inline-block; 
  }

  .autocomplete-results {
    z-index:1;
    background:white;
    position:absolute;
    padding: 0;
    margin: 0;
    border: 1px solid gray;
    height: 200px; 
    overflow: auto;
    width:24em;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    text-align:center;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: red;
    color: white;
  }

.clearIcon{
font-size:2em;
  color:transparent;
  border:2x solid black;
  -webkit-text-stroke:2px red;
}
</style>

