//引入模块
let FavoriteModel = require("../../model/user/favorite");

class favoriteService {
    constructor() { }
    getData(callback) {
        //创建对象
        let favoriteModel = new FavoriteModel();
        //获得数据
        favoriteModel.getFavorite(function (favorite) {
                callback({ favorite: favorite});
           
        });
    }
}

module.exports = favoriteService;