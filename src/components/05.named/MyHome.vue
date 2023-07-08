<template>
  <div>
    <h3>MyHome组件</h3>
    <router-link :to="{ name: 'mov', params: { id: 2 } }"
      >go to movie</router-link
    >
    <button type="button" class="btn btn-primary" @click="gotoMovie(3)">
      go to movie
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    gotoMovie(id) {
      this.$router.push({ name: 'mov', params: { id: id } })
    }
  }
}
</script>

<style lang="less" scoped></style>
