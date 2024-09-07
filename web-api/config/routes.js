let DataController = require("../controllers/dataController.js");

module.exports = (app)=>{

  app.get("/api/media/:media",DataController.media);
 
}