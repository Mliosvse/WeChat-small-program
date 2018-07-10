var postDetails = require("../../../data/posts-data.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isMusicPlaying:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过options对象,获取URL上的参数值
    var postId = options.postId;
    var that = this;
    this.setData({
      currentPostId:postId,
      postDetails: postDetails.postlist[postId-1]
    });
    //获取全局数据
    var globalData = getApp().globalData;
    if (globalData.g_isMusicPlaying && globalData.g_currentIndex === postId){
      this.data.isMusicPlaying = true;
    };
    //监听音乐播放事件
    wx.onBackgroundAudioPlay(function(){
      that.setData({
        isMusicPlaying: true
      });
    });
    //监听音乐暂停事件
    wx.onBackgroundAudioPause(function(){
      that.setData({
        isMusicPlaying: false
      });
    });
    //获取缓存的收藏状态
    var postCollection = wx.getStorageSync("key");
    if(postCollection){
      this.setData({
        collection: postCollection[postId] ? postCollection[postId] : false
      });
    }else{
      var collectionLists = {};
      collectionLists[postId] = false;
      wx.setStorageSync("key", collectionLists);
    }
  },
  //点击音乐图标事件
  ontapMusic:function(event){
    var that = this;
    var globalData = getApp().globalData;
    var musicData = that.data.postDetails.music;
    if (!that.data.isMusicPlaying){
      //调用微信API播放音乐
      wx.playBackgroundAudio({
        dataUrl: musicData.url,
        title: musicData.name,
        coverImgUrl: musicData.imgUrl,
        success: function () {
          globalData.g_currentIndex = that.data.currentPostId;
          globalData.g_isMusicPlaying = true;
          that.setData({
            isMusicPlaying:true
          });
        },
        fail:function(err){
      
        }
      });
    }else{
      //调用微信API暂停音乐
      wx.pauseBackgroundAudio();
      globalData.g_isMusicPlaying = false;
      that.setData({
        isMusicPlaying: false
      });
    }
  },
  //收藏图标点击事件
  ctrCollection:function(){
    var storage = wx.getStorageSync("key");
    storage[this.data.currentPostId] = !storage[this.data.currentPostId];
    var postCollection = storage[this.data.currentPostId];
    wx.setStorageSync("key", storage);
    this.setData({
      collection: storage[this.data.currentPostId]
    });
      wx.showToast({
        title: postCollection?'收藏成功':'取消成功',
        duration:1000
      })
  },
  //分享图片点击事件
  ctrShare:function(){
    var shareList=[
      "分享给微信好友",
      "分享到朋友圈",
      "分享给QQ好友",
      "分享到QQ空间",
      "分享新浪微博"
    ];
    wx.showActionSheet({
      itemList:shareList,
      success:function(option){
        var title = shareList[option.tapIndex];
        wx.showModal({
          title: title,
          content: '很抱歉小程序暂时还不支持分享功能',
        })
      }
    });
  }
})