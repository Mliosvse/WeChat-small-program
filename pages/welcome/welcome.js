Page({
  data: {
    moto:"開啟小程序之旅"
  },
  goIndex:function(event){
    wx.switchTab({
      url: '/pages/post/post',
    });
    // wx.navigateTo({
    //   url: '../post/post',
    // });
  }
})