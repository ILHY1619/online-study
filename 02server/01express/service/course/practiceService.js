//引入模块
let PracticeModel = require("../../model/course/practice");
let ProblemModel = require("../../model/course/problem");
class practiceService {
    constructor() { }
    getPractice(callback) {
        let practiceModel = new PracticeModel();

        practiceModel.getpractive(function (practice) {

            let problemModel = new ProblemModel();

            problemModel.getproblem(function (problem) {

                callback({ practice: practice, problem: problem });

            });

        });
    }
}

module.exports = practiceService;
