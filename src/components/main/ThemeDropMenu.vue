<template>

  <div class="switch-theme-con">
    <Row class="switch-theme" type="flex" justify="center" align="middle">
        <a @click="setTheme">
          <Icon :style="{marginTop: '-2px', verticalAlign: 'middle'}" color="#495060" :size="18"
                type="paintbucket"></Icon>
        </a>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'themeDropdownMenu',
    data () {
      return {
      };
    },
    methods: {
      setTheme () {
        this.$store.commit('ChangeMenuTheme')
      }
    }
  }
</script>
