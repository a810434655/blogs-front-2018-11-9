import $ from 'jquery'

export default{
  getConten(ziji,_this){
    $.ajax({
      url:"http://localhost:3000/content",
      type:"get",
      data:{neirong:ziji,yema:_this.input},
      beforeSend: function(){
        $(".login").css("display","block");
      },
      success:function (res) {
        if(res.msg=="成功"){
          _this.tableData=res.data;
          _this.zongshu=res.data.length;
          console.log(_this.tableData);
          $(".login").css("display","none");
        }else{
          console.log("失败");
        }
      },
      error:function (e) {
        console.log("访问失败");
      }
    })
  },
  getFind(tiaojian,_this){
    $.ajax({
      url:"http://localhost:3000/getSearch",
      type:"get",
      data:{neirong:tiaojian},
      beforeSend: function(){
        $(".login").css("display","block");
      },
      success:function (res) {
        if(res.msg=="成功"){
          _this.tableData=res.data;
          console.log(_this.tableData);
          $(".login").css("display","none");
        }else{
          console.log("失败");
          $(".login").css("display","none");
        }
      },
      error:function (e) {
        console.log("访问失败");
      }
    })
  },
  getHead(_this) {
    $.ajax({
      url: "http://localhost:3000/",
      type: "get",
      beforeSend: function () {
        $(".login").css("display", "block");
      },
      success: function (res) {
        _this.toubu = res.data;
        $(".login").css("display", "none");
      },
      error: function (e) {
        console.log("访问失败");
      },
    })
  }
}
