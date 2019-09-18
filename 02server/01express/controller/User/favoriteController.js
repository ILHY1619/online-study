let FavoriteService = require("../../service/user/favoriteService");
module.exports.index = function(req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let favoriteService = new FavoriteService();
  favoriteService.getData(function(ob) {
    res.json(ob);
  });
};
