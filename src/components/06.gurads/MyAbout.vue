<template>
  <div>
    <h3>MyAbout组件</h3>
    <hr />

    <!-- 在关于页面中, 声明两个子路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>&nbsp;&nbsp;
    <router-link to="/about/tab2">tab2</router-link>

    <!-- 在关于页面中, 声明 tab1 和 tab2 的路由占位符 -->
    <router-view class="box2"></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyAbout'
}
</script>

<style lang="less" scoped>
.box2 {
  padding: 14px;
  height: 200px;
  background-color: #ffa530;
}
</style>
