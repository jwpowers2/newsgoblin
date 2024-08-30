let DataController = require("../controllers/dataController.js");

module.exports = (app)=>{

  //app.get("/",DataController.home);
  app.get("/api/media/:media",DataController.media);
  //app.post("/api/users/login",UserController.login);
  //app.post("/api/users/register",UserController.register);
  //app.post("/api/users",UserController.read);
  //app.get("/api/users",UserController.all);
  //app.put("/api/users",UserController.update);
  //app.delete("/api/users/:id",UserController.remove);
  //app.post("/api/users/ticker1",UserController.ticker1);
}