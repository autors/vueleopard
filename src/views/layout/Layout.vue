<template>
  <div >
    hello world
    <router-view :key="key"></router-view>
  </div>
</template>


<script>

export default {
  name: 'layout',
  computed: {
  }
}
</script>
