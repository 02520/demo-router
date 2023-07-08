<template>
  <div>
    <h1>App 根组件</h1>
    <!-- 声明路由链接 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/main" class="ml-2">后台主页</router-link>
    <hr />

    <!-- 路由的占位符 -->
    <router-view class="box1"></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyApp'
}
</script>

<style lang="less" scoped>
.box1 {
  height: 400px;
  background-color: #efefef;
  padding: 14px;
}
</style>
