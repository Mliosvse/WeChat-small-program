Component({
  properties: {
    // 这里定义了typeName属性，属性值可以在组件使用时指定
    typeName: {
      type: String
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    getmore: function () {
      var movieType = '';
      var typeName = this.properties.typeName;
      switch (typeName) {
        case '热映电影':
          movieType='in_theaters';
          break;
        case '即将上映':
          movieType = 'coming_soon';
          break;
        case 'TOP250':
          movieType = 'top250';
          break;
        default:
          break;
      };
      wx.navigateTo({ url: '/pages/movies/movielist/movielist?name=' +typeName+'&type='+ movieType });
    }

  }
})