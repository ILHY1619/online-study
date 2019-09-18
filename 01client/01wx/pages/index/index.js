// pages/lesson/lesson.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height: '500',
    imgUrls: [],
    lessons:[]
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:3300/index',
      success: function (res) {
        if (res.statusCode == 200) {
          let lessons = res.data.lessons;
          let imgUrls=res.data.imgUrls
          that.setData({ lessons: lessons,imgUrls:imgUrls });
        }
      }  
    })
    //获得屏幕的高度
    let height =app.globalData.windowHeight;
    this.setData({
      height: height-360
    });
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },



  toActivity: function (res) {
    
    let actiID = res.currentTarget.dataset.yjs;
    
    wx.navigateTo({
      url: '../activity/activity?activityID=' + actiID,
    })
     
  },  
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})