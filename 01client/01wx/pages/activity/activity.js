// pages/examinationInfor/examinationInfor.js
Page({
  data: {
    inputCom: 0,
    inputValue: "",
    answer:0,
    coursesIndex: 0,
    titleIndex: 0,
    secondIndex: 0,
    problemIndex:0,
    proIndex:0,

    activity: [],
    comment: [],
    title: [
      {
        top: "课程介绍"
      },
      {
        top: "随堂练习"
      },
      {
        top: "评论"
      }
    ],
    practice: [],
    problem:[]
  },
  onLoad: function (options) {
    let that = this;
    let actiID = options.activityID;

    if (actiID == undefined) {
       actiID = 1;
    } else if (actiID > 3){
      actiID = 3;
    }
    that.inputCom=actiID
    
    wx.request({
      url: 'http://localhost:3300/course?activityID=' + actiID,
      success: function (res) {
        if (res.statusCode == 200) {
          let activity = res.data.activity;
          that.setData({
            activity: activity
          });
        }
      }
    });

    wx.request({
      url: 'http://localhost:3300/course/comment?activityID=' + actiID,
      success: function (res) {
        if (res.statusCode == 200) {
          let comment = res.data.comment;
          that.setData({
            comment: comment
          });
        }
      }
    });
    wx.request({
      url: 'http://localhost:3300/course/practice',
      success: function (res) {
        if (res.statusCode == 200) {
          let practice = res.data.practice;
          let problem = res.data.problem;
          that.setData({
            practice: practice,
            problem: problem
          });
      
        }
      }
    });
  },

  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputBarrage: '',
  bindInputBlur(e) {
    this.inputBarrage = e.detail.value
  },
  // 发送弹幕
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputBarrage,
      color: getRandomColor()
    })
  },



  // 收藏...........................................
  bindCollect(res) {
    let that = this;
    let id = 1;
    that.setData({
      coursesIndex: id
    });
    // wx.navigateTo({
    //   url: '../favorite/favorite?id='+id,
    // })
  },
  bindSend() {
    let that = this;
    let id = 0;
    that.setData({
      coursesIndex: id
    });
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      titleIndex: id,
      secondIndex: id
    });
  },


  // 随堂练习........................................
  problemTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.problem;
    // 把index换成id
    this.setData({
      problemIndex: id,
    });
  },

  proItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.problem;
    // 把index换成id
    this.setData({
      proIndex: id,
    });
  },
  problemanswer: function (res) {
     if(this.data.answer==0){
       this.setData({
         answer: 1,
       });
     }else{
       this.setData({
         answer: 0,
       });
     }
  },



  // 评论............................................
  bindKeyInput: function (e) {
    this.inputValue = e.detail.value
  },
  bindKeyButton() {
    if (this.inputValue==undefined){
        return ;
    }
    let actiID=this.inputCom;
    this.setData({
      inputButton: this.inputValue
    });
    
    // wx.request({
    //   url: 'http://localhost:3300/course/comment?activityID=' + actiID+"&&inButton"+inputButton,
    //   success: function (res) {
    //     if (res.statusCode == 200) {
    //       let comment = res.data.comment;
    //       this.setData({
    //         comment: comment
    //       });
    //     }
    //   }
    // });
  },


})

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}