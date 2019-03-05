Page({

  /**
   * 页面的初始数据
   */
  data: {
    params:{
      "start":0,
      "count":3
    },
    in_theaters:[],
    top250:[],
    coming_soon:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInTheaters();
    this.loadTop250();
    this.loadcomingSoon();
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
  
  },

  //获取正在热映电影
  loadInTheaters: function () {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        'Content-Type': "json"
      },
      data: page.data.params,
      success: function (res) {
        var subjects = res.data.subjects;
        page.setData({ in_theaters: subjects});
      }
    })
  },
  //获取top250电影
  loadTop250: function () {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      header: {
        'Content-Type': "json"
      },
      data: page.data.params,
      success: function (res) {
        var subjects = res.data.subjects;
        page.setData({ top250: subjects });
      }
    })
  },
  //获取coming_soon电影
  loadcomingSoon: function () {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      header: {
        'Content-Type': "json"
      },
      data: page.data.params,
      success: function (res) {
        var subjects = res.data.subjects;
        page.setData({ coming_soon: subjects });
      }
    })
  },
  //搜索事件
  goSearch: function () {
    wx.navigateTo({
      url: '/pages/movies/search/search',
    })
  }

})