// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    help: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.request({
      url: 'http://localhost:3300/user/help',
      success: function(res) {
        if (res.statusCode == 200) {
          let help = res.data.help;
          that.setData({
            help: help
          });
        }
      }
    });


  },
  helpTopItem: function(event) {
    let helpID = event.currentTarget.dataset.help;
    wx.navigateTo({
      url: '../helpContent/helpContent?helpID=' + helpID,
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})