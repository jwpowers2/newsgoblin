var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
//var history = require('connect-history-api-fallback');

const port = 5000;

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json());
//app.use(history());
app.use(express.static("dist"));
app.use(express.json());

require("./config/routes.js")(app);

app.listen(port, function() {
 console.log("listening on port 5000");
});
