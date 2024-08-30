let axios = require('axios');
let process = require("process")

function getData(){

  this.apiKey = "315bb12b5850439d8074d9ad4d5de9de";
  //this.apiKey = process.env.NEWS_API_KEY
  //this.categoryMap = {'network':'sources','topic':'category'};
  this.r = [];

  this.getMediaData = function(title,callback){

    let queryString = `https://newsapi.org/v2/top-headlines?sources=${title}&apiKey=${this.apiKey}`;
    axios.get(queryString, {
        headers: {
          'Content-Type':'application/json'
        }
     
      })
      .then((response)=>{
        
        if(response.data.error){
          console.log(response.data.error);
        } else {

            
          //console.log(response.data);
          for(let a in response.data.articles){
            this.r.push(response.data.articles[a]);
          }
          callback();
        }
        
      })
    .catch((error)=>{

         console.log(error); 
    });

  }
  this.getQueryData = function(country,title,callback){

    let queryString = `https://newsapi.org/v2/top-headlines?country=${country}&category=${title}&apiKey=${this.apiKey}`;
    axios.get(queryString, {
        headers: {
          'Content-Type':'application/json'
        }
     
      })
      .then((response)=>{
        
        if(response.data.error){
          console.log(response.data.error);
        } else {

            
          //console.log(response.data);
          for(let a in response.data.articles){
            this.r.push(response.data.articles[a]);
          }
          callback();
        }
        
      })
    .catch((error)=>{

         console.log(error); 
    });
    

  }
}
module.exports = getData;
/*
let v = new getData();

// need to enter one with 'network' and one with 'topic'
let arr = [{'type':'network','query':'aftenposten'},{'type':'topic','query':'entertainment'}];
for (let i of arr){
  //console.log(i.query);
  v.getData(i.type,i.query,()=>{
    console.log(v.r);
    // need to separate out results into their own arrays
  });
}
*/