// pages/movies/movielist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: {
      "start": 0,
      "count": 12
    },
    isShow:false,
    movieType:'',
    movies:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    wx.setNavigationBarTitle({title: option.name});
    this.setData({movieType:option.type});
    this.getmovies(option.type);
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
    this.getMoreMovies();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取电影数据
  getmovies:function(type){
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/'+type,
      header: {
        'Content-Type': "json"
      },
      data: page.data.params,
      success: function (res) {
        var movies = res.data;
        page.setData({ movies: movies });
      }
    });
  },
  //获取更多电影
  getMoreMovies:function(){
    this.setData({ 
      'params.count': this.data.params.count+ 12
      },function(){
      if (this.data.movies.total>this.data.params.count-12){
        this.getmovies(this.data.movieType);
      }else{
        this.setData({ isShow:true});
        console.log('我是有底线的!');
      }
    });
  },

})