<template>
  <div class="screenfull">
    <div class="full-screen-btn-con" @click="click">
      <Icon :type="isFullscreen?'arrow-shrink':'arrow-expand'" :size="23"></Icon>
    </div>
  </div>

</template>

<script>
  import screenfull from 'screenfull';
  export default {
    data() {
      return {
        isFullscreen: false,
      }
    },
    methods: {
      click() {
        if (!screenfull.enabled) {
          this.$Message({
            message: 'you browser can not work',
            type: 'warning'
          });
          return false;
        }
        screenfull.toggle();
        this.isFullscreen = !this.isFullscreen;
      }
    }
  }
</script>

<style lang="less">
  .screenfull {
    display: inline-block;
    width: 20px;
    height: 100%;
  }
</style>
