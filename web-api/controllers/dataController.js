// controller for Data
var RedisConn = require('../redisClient.js')
var MediaList = require('../mediaList.js')
let rc = new RedisConn();
var redisClient = rc.createClient();
let mediaList = new MediaList();

class DataController{

  test(req,res){

    console.log("data controller fired");
    // test this endpoint
    redisClient.get('test', function(error,result){    
      res.json({test:result});
    });
  }
  async media(req,res){

    console.log(`media request received: ${req.params.media}`);
    
    let dataResponse = {};
    let mediaRequested = mediaList.mediaMap[req.params.media];
    // get ticker first and then put headlines get in a try block
    try {
      let results = await redisClient.get(mediaRequested)
      console.log(results)
      dataResponse['media'] = results;
      try {
        let ticker = await redisClient.get('ticker')
        let t = JSON.parse(ticker);
        dataResponse['ticker'] = t[mediaRequested]
        res.json(dataResponse);
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
    /*
    .then((error, result)=> {
      if (!error){  
        console.log(result);
        dataResponse['media'] = result;
        redisClient.get('ticker', function(error,ticker){

          let t = JSON.parse(ticker);
          dataResponse['ticker'] = t[mediaRequested]
          res.json(dataResponse);
        });
      }
    })
    .catch((error) => {
     
    })
      */
  }

}

module.exports = new DataController();