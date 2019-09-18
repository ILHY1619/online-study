//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    coursesIndex: 0,
    findHeadr: [],
  },

  onLoad: function() {
    let that = this;

    wx.request({
      url: 'http://localhost:3300/find',
      success: function(res) {
        if (res.statusCode == 200) {    
          let findHeadr = res.data;
          
          that.setData({
            findHeadr: findHeadr
          });
        }
      }
    })
    wx.getSystemInfo({
      success: function(res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 400;
        that.setData({
          height: buffer
        });
      },
    })

  },
  clickTopItem: function(res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
   
    
    //把index换成id
    this.setData({
      coursesIndex: id

    });
  },
  
  toActivity: function(event) {
    let actiID = event.currentTarget.dataset.acti;
    console.log(actiID)
    wx.navigateTo({
      url: '../activity/activity?activityID='+actiID,
    })
  },
  getRandomColor: function() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }
})