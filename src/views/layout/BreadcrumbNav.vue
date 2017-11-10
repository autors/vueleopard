<template>
  <Breadcrumb>
    <BreadcrumbItem
      v-for="item in currentPathArr"
      :href="item.path"
      :key="item.name"
    >{{item.title}}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import util from '@/utils/util.js';
  export default {
    computed: {
      currentPathArr(){
        return this.$store.state.app.currentPathArr;
      },
    }
  }
</script>
