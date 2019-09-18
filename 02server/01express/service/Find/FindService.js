//引入模块

let FindCourseService = require("./FindCourseService");
class findheaderService {
  constructor() { }
  getData(callback) {
    let findCourseService = new FindCourseService();
    //获得数据
    findCourseService.getfindHeader(function(courses) {
      callback(courses);
    });
}
}
module.exports = findheaderService;