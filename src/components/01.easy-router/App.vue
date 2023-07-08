<template>
  <div>
    <h1>App组件</h1>
    <a href="#/home">Home</a>&nbsp; <a href="#/movie">Movie</a>&nbsp;
    <a href="#/about">About</a>&nbsp;
    <hr />

    <!-- <MyHome></MyHome>
    <MyMovie></MyMovie>
    <MyAbout></MyAbout> -->
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyAbout from './MyAbout.vue'
import MyMovie from './MyMovie.vue'
import MyHome from './MyHome.vue'
export default {
  components: {
    MyAbout,
    MyMovie,
    MyHome
  },
  name: 'MyApp',
  data() {
    return {
      comName: 'MyHome'
    }
  },
  created() {
    // 监听 hash 值变化的事件
    window.onhashchange = () => {
      // 通过 location.hash 获取到最新的 hash 值, 并进行匹配
      switch (location.hash) {
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break

        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
