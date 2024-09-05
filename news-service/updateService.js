var getData = require('./getData');
var redis = require('redis');
var MediaList = require('./mediaList')
var UpdateMedia = require('./updateMedia')
//var rclient = redis.createClient({port:"6379",host:"newsgoblin-cache"});
var RedisConn = require('./redisClient.js')
let rc = new RedisConn();
var rclient = rc.createClient();

rclient.set('ticker','{}');

let updateMedia = new UpdateMedia();
let ml = new MediaList();



function setMediaRedis(){

  for(let media in ml.mediaList){
  
    let m = ml.mediaList[media].query.toLowerCase();
    rclient.set(m,'{}');

  }
  
  for(let cat in ml.categoryList){
  
    let m = ml.categoryList[cat].query.toLowerCase();
    rclient.set(m,'{}');

  }
  
  console.log('clean media and cat objects set');
}

setMediaRedis();
rclient.quit();

//updateMedia.updateMedia();
//updateMedia.updateCategory();



setInterval(function(){
  
    updateMedia.updateMedia();
    

    
},2000);

setInterval(function(){
  
  updateMedia.updateCategory();
  
},10000);

