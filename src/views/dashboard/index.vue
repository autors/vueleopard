<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <Menu class="header-middle-con2"  mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people"></Icon>
        用户管理
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/less" lang="less" >
</style>
