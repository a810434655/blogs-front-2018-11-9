<template>
  <el-container id="mokuai-you">
    <!--这是博客的头部-->
 <el-header>
   <el-row style="padding-left: 30px" >
     <el-button size="medium" type="info" plain autofocus @click.native="getContent($event)">ALL</el-button>
     <el-button size="medium" :type="i.yangshi" plain  v-for="(i,key) in toubu" @click.native="getContent($event)">{{i.mubiao}}</el-button>
   </el-row>
 </el-header>
    <!--这里是表格内容-->
    <el-main>
      <div class="biaotouming"><span class="biaotou-left">名称</span><span class="biaotou-right">创建时间</span></div>
      <ul class="content">
        <li v-for="(i,key) in tableData">
          <el-col :span="20" style="text-align: left;padding-left: 80px">
          <p :span="20">{{i.text}}</p>
          </el-col>
          <el-col :span="4">
          <p :span="4" style="text-align: center;padding-right: 40px;">{{i.date}}</p>
          </el-col>
        </li>
      </ul>
    </el-main>
    <el-footer>
      <div style="margin-top: 20px;" class="search">
        <el-input placeholder="请根据文章标题或内容搜索" v-model="neirong" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click.native="getSearch"></el-button>
        </el-input>
      </div>
      <div class="fenye">

      </div>

    </el-footer>
    <div class="login"><img src="../image/5-160914192R5-50.gif" alt=""></div>
  </el-container>

</template>

<script>
  import $ from 'jquery'
    export default {
        name: "mokuai-you",
      data(){
          return{
            toubu:[],
            tableData:[],
            neirong:""
          }
      },
      methods:{
      getContent(ziji){
        var _this=this;
        var neirong=ziji.srcElement.innerText;
        if(neirong!=""){
          console.log(neirong);
          $.ajax({
            url:"http://localhost:3000/content",
            type:"get",
            data:{neirong:neirong},
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
              }

            },
            error:function (e) {
              console.log("访问失败dwadawdwadawwdwadwadwa");
            }
          })
        }
      },
        getSearch(){
          var _this=this;
          var tiaojian=this.neirong;
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
                console.log("访问失败dwadawdwadawwdwadwadwa");
              }
            })
        }

      },
      mounted(){
          var _this=this
          $.ajax({
            url:"http://localhost:3000/",
            type:"get",
            beforeSend: function(){
              $(".login").css("display","block");
            },
            success:function (res) {
              _this.toubu=res.data;
              $(".login").css("display","none");
            },
            error:function (e) {
              console.log("访问失败");
            },
          })
        $.ajax({
          url:"http://localhost:3000/content",
          type:"get",
          data:{neirong:""},
          beforeSend: function(){
            $(".login").css("display","block");
          },
          success:function (res) {
            _this.tableData=res.data;
            $(".login").css("display","none");
          },
          error:function (e) {
            console.log("访问失败");
          }
        })
      }
    }
</script>

<style scoped>
  .el-row .el-button{
    margin-top: 10px;
  }
  .search{
    width: 70%;
    float:left;
  }
  .login{
    position: fixed;
    left:0%;
    top:0%;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #ffffff;
    display: none;
  }
  .login img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content{
    width: 100%;
    list-style: none;
    min-height:400px;
    height: 700px;
    overflow-y:auto;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-height: 766px){
    .content{
      width: 100%;
      list-style: none;
      min-height:250px;
      height: 250px;
      overflow-y:auto;
      padding: 0;
      margin: 0;
    }
  }
  @media only screen and (min-height: 1080px){
    .content{
      width: 100%;
      list-style: none;
      min-height:400px;
      height: 500px;
      overflow-y:auto;
      padding: 0;
      margin: 0;
    }
  }
  .content li{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #eee;

  }
  .content li p{
    display: block;
    height: 100%;
    line-height: 70px;
    padding: 0;
    margin: 0;
  }
  .biaotou-left{
    float: left;
    padding-left: 80px;
    line-height: 50px;
    color: #a3b4bc;
    font-size: 12px;
  }
  .biaotou-right{
    float: right;
    padding-right: 120px;
    line-height: 50px;
    color: #a3b4bc;
    font-size: 12px;
  }
  .biaotouming{
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #f9fafc;
  }
  .el-container{
    width: 100%;
  }

  .el-main {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    min-height: 300px;
    padding: 0 !important;
    overflow: hidden;
  }
   .el-footer {
     background-color: #ffffff;
     color: #FFF;
     min-height: 80px;
     border-top: 1px solid #eee;
     position: absolute;
     bottom: 0px;
     width: 100%;
  }
  .el-header{
    background-color: #ffffff;
    color: #FFF;
    height: auto !important;
    padding: 10px 20px 20px 20px;
  }
</style>
