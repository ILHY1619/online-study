//1,引入express
let express = require("express");
let mysql = require('mysql'); 
//2，获得express对象
let app = express();
//3,引入body-parser模块
let bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//3,设置跨域访问
app.all("*", function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://192.168.3.15:3300");
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", "http://192.168.137.185");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

let ip = "http://192.168.3.15:";
let port = 3300;

let indexController = require("./controller/indexController");
app.get("/index",indexController.index);

let findController = require("./controller/findController");
app.get("/find", findController.index);

let userController = require("./controller/User/userController");
app.get("/user", userController.index);

let favoriteController = require("./controller/User/favoriteController");
app.get("/user/favorite", favoriteController.index);

let helpController = require("./controller/User/helpController");
app.get("/user/help", helpController.index);

let helpContenController = require("./controller/User/helpContentController");
app.get("/user/helpContent", helpContenController.index);

let activityController = require("./controller/course/ActivityController");
app.get("/course", activityController.index);

let commentController = require("./controller/course/CommentController");
app.get("/course/comment", commentController.index);

let PracticeController = require("./controller/course/PracticeController");
app.get("/course/practice", PracticeController.index);



//4,进行监听
app.listen(port, function() {
  console.log("启动");
});
