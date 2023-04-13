// pages/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    msg: "Hello, ",
    type: 1,
    flag: true,
    args: ['Apple', 'Pear', 'Oranage']
  },
  //加一按钮
  add_one(){
    console.log("ok"),
    this.setData({
      count: this.data.count + 1
    })
  },
  //加二按钮
  add_two(e:any){
    console.log("ok"),
    this.setData({
      count: this.data.count + e.target.dataset.two
    })
  },

  //inputHandler
  inputHandler(e:any){
    //console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})