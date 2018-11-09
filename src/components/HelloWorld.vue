<template>

  <el-aside style="width: 200px;">
      <div class="touxiang">
      <img src="../image/66efb8410b68a661.jpg" class="image" alt="">
        <p style="margin-top: 5px">杨龙婷</p>
      </div>
      <div class="git">
        <ul>
          <li><a href="https://github.com/a810434655"><img src="../image/github.png" alt=""></a></li>
          <li><a href="https://weibo.com/p/1005055255098809/info?mod=pedit"><img src="../image/weibo.png" alt=""></a></li>
        </ul>
      </div>
        <el-col :span="12">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            active-text-color="#ff4275"
            >
            <el-menu-item index="/" >
              <span slot="title">个人博客</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <span slot="title">关于自己</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      <div class="erweima">
        <p style="font-size:10px;">我的QQ</p>
        <p style="font-size:8px;color: #849aa4;">扫码添加</p>
        <p class="erweitupian"><img src="../image/erweima.jpg" alt=""></p>
      </div>
    </el-aside>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .erweitupian{
    margin-bottom: 50px;
  }
  .erweitupian img{
   width: 50%;
  }
  .erweitupian img:hover{
    transform: scale(1.5,1.5);
  }
  .erweima{
    width: 100%;
    height: 50%;
    margin-top: 30px;
  }
  .is-active{
    background-color: #e5f1fc !important;
    border-left:3px solid #3593f2;
  }
  .el-col{
    width: 100%;
    height: 30%;
    margin-top: 70px;
    margin--bottom:50px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    height:100%;
    background: #ffffff;
    overflow:auto;
    overflow-x: hidden;
    border-right:1px solid #eee ;
  }
  .el-menu-item{
    margin-top: 15px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    height: 50px;
  }
  .touxiang{
    width: 100%;
    height: 20%;
    margin-top: 40px;

  }
  .image{
    width: 80px;
    height: 80px;
    border-radius:40px;

  }
   .image:hover{
     animation: 3s text;
   }
  @keyframes text {
    0%{
      transform: rotatez(0deg);
    }
    100%{
      transform: rotatez(360deg);
    }
  }
  .git{
    width: 100%;
    height: 5%;
    margin-top:70px;
  }
  .git ul{
    width: 100%;
    height: 100%;
    list-style:none;
    padding-left: 0;
    text-align: center;
  }
  .git ul li img{
    width: 32px;
    height: 32px;
  }
  .git ul li{
    width: 5%;
    height: 100%;
    float: left;
    margin-left: 27%;
  }
  body > .el-container {
    height: 100%;
  }
</style>
