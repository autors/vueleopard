<template>
  <div class="dashboard-container">
    hello world
    {{name}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'dashboard',
    computed: {
        name(){
            return this.$route.path
        }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
</style>
