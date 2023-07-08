<template>
  <div>
    <h3>MyHome组件</h3>
    <button type="button" class="btn btn-primary" @click="goToMovie(3)">
      跳转到Movie页面
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    goToMovie(id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>

<style lang="less" scoped></style>
