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

  this.newsCounter = 1;
  this.categoryCounter = 1;  
  this.redisClient = rc.createClient();  
  this.getData = new getData();

  this.updateMedia = () => {
    
    
    this.newsCounter = (this.newsCounter + 1 <= mediaList.mediaList.length-2 ) ? this.newsCounter += 1 : 0;
    let current = mediaList.mediaList[this.newsCounter]
    // do fetch here
    this.getData.getMediaData(current.query, (response)=>{
      console.log(response.length)
      try {
        this.redisClient.set(current.query, JSON.stringify(response))
      } catch (e) {
        console.log(e);
      }
      
      
    })
    console.log(`media outlet is: ${current.name}`)
    
  }
  this.updateCategory = ()=>{

    
    this.categoryCounter = (this.categoryCounter <= mediaList.categoryList.length-2) ? (this.categoryCounter += 1) : 0;
    let current = mediaList.categoryList[this.categoryCounter]
    // do fetch here
    this.getData.getQueryData('us', current.query, (response)=>{
      console.log(response.length)
      this.redisClient.set(current.query, JSON.stringify(response))
    })
    console.log(`category is: ${current.name}`)
    

      
  }

}

module.exports = UpdateMedia;