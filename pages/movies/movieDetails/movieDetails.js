// pages/movies/movieDetails/movieDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetails(options.id);
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
  //获取电影详情信息
  getDetails: function (id) {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/'+ id,
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        page.handleData(res.data);
        page.setData({ movieData: res.data });
      }
    })
  },
  //电影详情数据处理
  handleData:function(data){
    let castsArr = [], genresArr = [];
    data.casts.forEach(function(val,index){
      castsArr.push(val.name);
      data.castsStr = castsArr.join('/');
    });
    data.genres.forEach(function (val, index) {
      genresArr.push(val);
      data.genresStr = genresArr.join('丶');
    });

  }

})