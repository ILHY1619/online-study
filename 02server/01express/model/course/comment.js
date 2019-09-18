//引入模块
let SqlBase = require("../SqlBase");
let inButton_com;
class CommentModel extends SqlBase {
  constructor() {
    super();
  }
  getComment(comment_id, callback) {
    let sql = `select * from comment  where comment.comment_id=${comment_id} `
    this.connection.query(sql, function (err, comment) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(comment);
    });
  }
  // update(callback) {
  //   let inButton=inButton_com
  //   //4,编写sql语句
  //   let sql = "UPDATE comment SET id='6', comment_id ='3',url = 'https://imgs-1300160165.cos.ap-chengdu.myqcloud.com/cat.jpg' ,name ='小王',content="+inButton;
  //    console.log(1)
  //   //5，更新操作
  //   this.connection.query(sql, function (err, result) {
  //     if (err) {
  //       console.log('[INSERT ERROR] - ', err.message);
  //       return;
  //     }
  //     callback(result);
  //   });
  // }

}

module.exports = CommentModel;
