var postData = require('../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTapSwiper :function(event){
    var postid = event.target.dataset.postid;
    wx.navigateTo({
      url: './postDetail/postDetail?postId=' + postid,
    })
  },
  toDetail: function (event) {
    //在event对象中获取自定义属性:data-postid
    var idx = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: './postDetail/postDetail?postId='+idx,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postList: postData.postlist
    });
  }
})