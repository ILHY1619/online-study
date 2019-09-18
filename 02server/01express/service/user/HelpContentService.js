//引入模块

let HelpContentModel = require("../../model/user/helpContent");

class  HelpContentService {
  constructor() { }
  getData(help_id,callback) {
    let  helpContentModel = new  HelpContentModel();
    //获得数据
    helpContentModel.gethelpContent(help_id,function(help) {
      callback({help:help});
    });
}
}
module.exports =   HelpContentService;