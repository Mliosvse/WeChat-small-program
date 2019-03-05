// pages/movies/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetails:function(e){
      var id = e.currentTarget.dataset.movieid;
      wx.navigateTo({
        url: '/pages/movies/movieDetails/movieDetails?id='+id,
      })
    }
  }
})
