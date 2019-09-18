// pages/02page/02page.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    newName:{},
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showModal: false,
    textV: '',
    user:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:3300/user',
      success: function (res) {
        if (res.statusCode == 200) {
          let user = res.data.user;
          that.setData({
            user: user
          });
        }
      }
    });
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
       
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
         
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
//  登录时的名字
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.data.newName = app.globalData.userInfo
    console.log(this.data.newName)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    
  },



  changeName:function(){
    let that = this;
    that.setData({
      showModal: true
    })
  },
  back: function () {
    let that = this;
    that.setData({
      showModal: false
    })
  },
  /**
   * 获取input输入值
   */

  newNameInput: function (e) {
    let that = this;
    that.setData({
      textV: e.detail.value
    });
  },

  /**
   * 点击确定按钮获取input值并且关闭弹窗
   */

  ok: function () {
    let that = this; 
    let text = that.textV; 
    that.setData({
      showModal: false,
    });
    that.data.newName.nickName = that.data.textV
    that.setData({
      userInfo: that.data.newName ,
    });
  },

  // 更改头像图片
  chooseImage: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      success: function (res) {
 
        that.data.newName.avatarUrl = res.tempFilePaths
       
        that.setData({
          userInfo: that.data.newName,
        });
      }
    })
  },

  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../activity/activity',
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