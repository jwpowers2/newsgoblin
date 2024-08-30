//import Vue from 'vue'
//import Vuex from 'vuex'
import createStore from 'vuex';

//Vue.use(Vuex)

// store.js

let TrieSet = require('./trieset');
import MediaList from './media_list'


//Vue.use(Vuex)

let medialist = new MediaList();
let ts = new TrieSet();

let state = {

  mobile:false,
  network:'',
  count:0,
  media:{},
  ticker:[],
  mediaList:ts,
}

function buildMediaTrieSet(){

  for(let media in medialist.mediaList){
  
    let m = medialist.mediaList[media].name.toLowerCase();
    state.mediaList.insert(m);

  }
}
function catsToTrieSet(){

  for(let topic in medialist.categoryList){
  
    let x = medialist.categoryList[topic].name.toLowerCase();
    state.mediaList.insert(x);

  }

}
buildMediaTrieSet();
catsToTrieSet();

const mutations = {
  isMobile(state, mobile){
    state.mobile = mobile;
  },
  changeNetwork(state,n){
    state.network = n;
  },
  changeMedia(state,m){
    state.media = m;
  },
  changeTicker(state,t){
    state.ticker = t;
  },
  changeCount(state,c){
    state.count = c;
  }
}

const store = createStore({
  state,
  mutations
})

export default store;
