<template>
    <el-container id="app">
     <router-view/>
      <router-view name="youbian"></router-view>
    </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body > .el-container {
    height: 100%;
  }

</style>
