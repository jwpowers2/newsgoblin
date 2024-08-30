var redis = require('redis');


function RedisConn(){

    

	this.createClient = function(){

		var client = redis.createClient({port:"6379",host:"newsgoblin-cache"})
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