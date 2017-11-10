<template>
  <div>
    <div class="logo-con" :style="{background: menuTheme !== 'dark'?'#495060':''}">
      <a @click="herfchange" v-show="!sidebar"><img src="../../assets/jahuar.png" class="maxlogo"/></a>
      <a @click="herfchange" v-show="sidebar"><img src="../../assets/leopard.png"/></a>
    </div>
    <Menu v-if="!sidebar" ref="sideMenu" :active-name="$route.path" :theme="menuTheme" :open-names="openedSubmenuArr"
          width="auto" @on-select="changeMenu">
      <template v-for="item in permission_routers" v-if="item.hidden!=true">
        <MenuItem v-if="item.children.length<=1" :name="item.path+'/'+item.children[0].path"
                  :key="item.path">
          <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
          <span class="layout-text" :key="item.path">{{ item.title }}</span>
        </MenuItem>

        <Submenu v-if="item.children.length>1" :name="item.name" :key="item.path">
          <template slot="title">
            <Icon :type="item.icon" :size="iconSize"></Icon>
            <span class="layout-text">{{ item.title }}</span>
          </template>
          <template v-for="child in item.children">
            <MenuItem :name="item.path+'/'+child.path" :key="child.name">
              <Icon :type="child.icon" :size="iconSize" :key="child.name"></Icon>
              <span class="layout-text" :key="child.name">{{ child.title }}</span>
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </Menu>

    <div v-else-if="sidebar">
      <template v-for="(item, index) in permission_routers" v-if="item.hidden!=true">
        <div :key="index" class="shrink">
          <Dropdown transfer v-if="item.children.length !== 1" placement="right-start" :key="index"
                    @on-click="changeMenu">
            <Button class="shrinkbutton" type="text">
              <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
            </Button>
            <DropdownMenu class="shrinkdropdownMenu" slot="list">
              <template v-for="(child, i) in item.children">
                <DropdownItem :name="item.path+'/'+child.path" :key="i">
                  <Icon :type="child.icon"></Icon>
                  <span class="dropdownItemIcon">{{ child.title }}</span>
                </DropdownItem>
              </template>
            </DropdownMenu>
          </Dropdown>
          <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
            <Button @click="changeMenu(item.path+'/'+item.children[0].path)" class="shrinkbutton" type="text">
              <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
            </Button>
            <DropdownMenu class="shrinkdropdownMenu" slot="list">
              <DropdownItem :name="item.path+'/'+item.children[0].path" :key="'d' + index">
                <Icon :type="item.icon"></Icon>
                <span class="dropdownItemIcon">{{ item.children[0].title }}</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        iconSize: 14
      }
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      menuTheme(){
        return this.$store.state.app.menuTheme;
      },
      openedSubmenuArr(){
        let n = this.$route.path.split("/")[1];
        return [n];
      },
      iconColor(){
        return this.$store.state.app.menuTheme === 'dark' ? 'white' : '#495060';
      }
    },
    methods: {
      changeMenu(active){
        this.$router.push(active);
      },
      herfchange(){
        this.$router.push("/");
      }
    }
  }
</script>

<style lang="less">
  .shrink {
    text-align: center;
    .shrinkbutton {
      width: 70px;
      margin-left: -5px;
      padding: 10px 0;
    }
    .shrinkdropdownMenu {
      width: 200px;
    }
    .dropdownItemIcon {
      padding-left: 10px;
    }
  }
</style>

