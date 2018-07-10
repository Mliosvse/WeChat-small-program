Page({
  data: {
    moto:"開啟小程序之旅"
  },
  onTap:function(event){
    wx.redirectTo({
      url: '../post/post',
    });
    // wx.navigateTo({
    //   url: '../post/post',
    // });
  }
})