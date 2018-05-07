
Page({
  data: {
    latitude: "",
    longitude: ""
  },
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
    var a = 10, b = 20;
    console.log(80 === (a << 3));
  }
})