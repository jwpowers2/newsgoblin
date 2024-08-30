var getData = require('./getData');
//var RedisConn = require('./redisClient')
var redis = require('redis')
var MediaList = require('./mediaList')
//let rc = new RedisConn();
//var redisClient = rc.createClient();
var RedisConn = require('./redisClient.js')
let rc = new RedisConn();

let mediaList = new MediaList();


function UpdateMedia(){

  this.news_counter_tens = 0;
  this.cat_counter = 0;    

  this.updateMedia = function(){

    let redisClient = rc.createClient();
    let news_string = ""; 
    let news_array = [];   
    let v = new getData();
    let _t = this;
    console.log("fire update media");

    let news_counter = _t.news_counter_tens;

    while (news_counter < _t.news_counter_tens + 1){

      news_counter++;
      if (mediaList.mediaList[news_counter]){
        news_string = news_string + mediaList.mediaList[news_counter].query + ",";
        news_array.push(mediaList.mediaList[news_counter].query);
      }
    }
    console.log(news_array)
    let response_data = {};

    news_array.forEach((e)=>{
      response_data[e] = [];
    });
    console.log(news_string);
    v.getMediaData(news_string,()=>{

     //console.log(v.r);
      v.r.forEach((elem)=>{
        //console.log(elem);
        let to_append = response_data[elem.source.id];
        to_append.push(elem);
        response_data[elem.source.id] = to_append;
        redisClient.set(elem.source.id, JSON.stringify(elem))
      });
      v.r = [];
      
      
        
    });
      
    

    news_string = "";
    news_array = [];

    if (mediaList.mediaList.length < _t.news_counter_tens){
      // zero out tens counter
      _t.news_counter_tens = 0;

    } else {

      // increment tens counter
      _t.news_counter_tens += 1;

    }
    //redisClient.quit();
  }
  this.updateCategory = function(){


    let redisClient = rc.createClient();
    let v = new getData();
    let _t = this;
    console.log("fire update category");

    if (_t.cat_counter > mediaList.categoryList.length-1){
      _t.cat_counter = 0;
    } else {
      let cat_object = mediaList.categoryList[_t.cat_counter];
      v.getQueryData('us',cat_object.query,()=>{

      redisClient.get('ticker', function(error,ticker1){

        let ticker = {};
        if (ticker1){
          ticker = JSON.parse(ticker1);
        }
        var categoryList = [];
        for (let category of v.r){
          console.log(ticker);
          console.log(category)
          let tOb = {};
          tOb['agency'] = category.source.name;
          tOb['title'] = category.title.toUpperCase();
          tOb['urlToImage'] = category.urlToImage;
          tOb['url'] = category.url;
          categoryList.push(tOb);
          console.log(categoryList); 

	}
        redisClient.set(cat_object.name, JSON.stringify(categoryList));
        ticker[cat_object.name] = categoryList; 
        redisClient.set('ticker', JSON.stringify(ticker));
      });
      
    });
      _t.cat_counter++;
      v.r = [];
    }
  }

}

module.exports = UpdateMedia;