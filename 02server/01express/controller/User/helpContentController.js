let HelpContentService = require("../../service/user/HelpContentService");
module.exports.index = function(req, res) {
  //从用户请求里面取得里面的数据,用户请求在req

  let help_id =req.query.helpId;
 
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let helpContentService = new HelpContentService();
  helpContentService.getData(help_id,function(ob) {
    res.json(ob);
  });
};
