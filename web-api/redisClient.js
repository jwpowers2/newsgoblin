var redis = require('redis');
const process = require("process")


function RedisConn(){

    

	this.createClient =  function() {
		if (process.NODE_ENV === "DEV"){
			var client = redis.createClient({port:"6379",host: process.env.DEV_CACHE})
		} else {
			var client = redis.createClient({port:"6379",host:process.env.PROD_CACHE})
		}
        client.connect()
		client.on('connect', function() {
		    console.log('Redis client connected');
		});

		client.on('error', function (err) {
		    console.log('Something went wrong ' + err);
		});
                return client;
        }
}

module.exports = RedisConn;