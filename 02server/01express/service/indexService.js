//引入模块
let LessonsModel = require("../model/Index/Lessons");
let ImgUrlsModel = require("../model/Index/ImgUrls");
class IndexService {
    constructor() { }
    getData(callback) {
        //创建对象
        let lessonsModel = new LessonsModel();
        //获得数据
        lessonsModel.getLessons(function (lessons) {
            //创建对象
            let imgUrlsModel = new ImgUrlsModel();
            imgUrlsModel.getImgUrls(function (imgUrls) {
                callback({ lessons: lessons, imgUrls: imgUrls });
            });
        });
    }
}

module.exports = IndexService;