//引入模块
let findHeaderModel = require("../../model/Find/findHeader");
let CoursesModel = require("../../model/Find/Courses");
class findHeaderService {
  constructor() {}
  getfindHeader(callback) {
    let findHeader = new findHeaderModel();
    let coursesModel = new CoursesModel();
    //获得数据
    findHeader.getfindHeadr(function(findHeader) {
      //获得每个课程
      for (let i = 0; i < findHeader.length; i++) {
        //获得课程的id
        let courses_id = findHeader[i].id;
        //根据课程id获得章节数据
        coursesModel.getCoursesById(courses_id, function(courses) {
          //每次取得的章节数据放到课程里面
          findHeader[i].courses = courses;
          if (i == findHeader.length - 1) {
            callback(findHeader);
          }
        });
      }
    });
  }
}

module.exports = findHeaderService;
