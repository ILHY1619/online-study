// pages/download/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDelete: false,
    text: "编辑",
    text1: "编辑",
    text2: "完成",
    deleteIndex: 0,
    favorite: [],
    listing: [
      {
        id: 0,
        title: "AP-Riemann Sum",
        teacher: ["孙宗义"],
        isTap: false,
        url: '',
      },
      {
        id: 1,
        title: "AP-Disk Method",
        teacher: ["孙宗义"],
        isTap: false,
        url: '',
      }
    ],
  },
  // onLoad: function (options) {

  //   let that = this;
  //   wx.request({
  //     url: 'http://localhost:3300/user',
  //     success: function (res) {
  //       if (res.statusCode == 200) {
  //         let favorite = res.data.favorite;
  //         that.setData({
  //           favorite: favorite
  //         });
  //       }
  //     }
  //   })
  // },

  bianji: function () {
    let that = this;
    let nowState = this.data.isDelete;
    that.setData({
      isDelete: !nowState
    })
    if (nowState == false) {
      that.setData({
        text: this.data.text2
      })
    } else {
      that.setData({
        text: this.data.text1
      })
    }
  },

  deleteButton: function (e) {
    let that = this;
    let buffer = 'listing[' + e.target.dataset.id + '].isTap';
    let id = e.target.dataset.id;
    let listing = this.data.listing;
    let nowState = this.data.listing[id].isTap;
    that.setData({
      [buffer]: !nowState
    })
    console.log(id);
    console.log(listing[id].isTap);
  },

  deleteItem: function (e) {
    let that = this;
    let listing = this.data.listing;
    let length = listing.length;
    console.log(listing);
    for (let i = 0; i < length; i++) {
      console.log(i);
      if (listing[i].isTap == true) {
        this.data.deleteIndex++;
        let deleteIndex = this.data.deleteIndex;
        for (let j = i; j < length - deleteIndex; j++) {
          listing[j + 1].id--;
        }
        listing.splice(i, 1);
        i--;
        length--;
      }
    }
    that.setData({
      listing: listing
    })
  },

  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../activity/activity',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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