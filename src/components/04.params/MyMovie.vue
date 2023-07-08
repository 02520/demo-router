<template>
  <div>
    <h3>MyMovie组件 --- {{ $route.params.id }} --- {{ id }}</h3>
    <button type="button" class="btn btn-danger" @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  name: 'MyMovie',
  //用于接收父组件传递的数据
  props: ['id'],
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped></style>
