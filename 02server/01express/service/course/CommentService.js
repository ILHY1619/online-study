//引入模块

let CommentModel = require("../../model/course/comment");

class  CommentService {
  constructor() { }
  getData(comment_id,callback) {
    let  commentModel = new CommentModel();
    //获得数据
    commentModel.getComment(comment_id,function(comment) {
      callback({comment:comment});
    });
}
}
module.exports =   CommentService;