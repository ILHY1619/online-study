//引入模块
let UserModel = require("../../model/user/user");

class UserService {
    constructor() { }
    getData(callback) {
        //创建对象
        let userModel = new UserModel();
        //获得数据
        userModel.getUser(function (user) {
                callback({ user: user});
           
        });
    }
}

module.exports = UserService;