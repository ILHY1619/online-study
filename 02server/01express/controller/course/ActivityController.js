let ActivityService = require("../../service/course/ActivityService");
module.exports.index = function(req, res) {
 
  //从用户请求里面取得里面的数据,用户请求在req
  let activity_id =req.query.activityID;
 
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let activityService = new ActivityService();
  activityService.getData(activity_id,function(ob) {
    res.json(ob);
  });
};
