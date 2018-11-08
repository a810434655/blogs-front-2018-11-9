<template>
  <el-container id="mokuai-you">
 <el-header>
   <ul>
     <li><el-button></el-button></li>
   </ul>

 </el-header>
    <el-main>我是中间</el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script>
    export default {
        name: "mokuai-you"
    }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #FFF;
    text-align: center;
    line-height: 60px;
  }
</style>
