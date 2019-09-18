//引入模块

let ActivityModel = require("../../model/course/activity");

class  ActivityService {
  constructor() { }
  getData(activity_id,callback) {
    let  activityModel = new ActivityModel();
    //获得数据
    activityModel.getActivity(activity_id,function(activity) {
      callback({activity:activity});
    });
}
}
module.exports =  ActivityService;