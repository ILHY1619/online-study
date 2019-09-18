//引入模块

let HelpModel = require("../../model/user/Help");

class  HelpService {
  constructor() { }
  getData(callback) {
    let  helpModel = new  HelpModel();
    //获得数据
    helpModel. getHelp(function(help) {
      callback({help:help});
    });
}
}
module.exports =  HelpService;