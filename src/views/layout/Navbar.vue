<template>
  <div>
    <div class="main-header">
      <div class="navicon-con">
        <Button :style="{transform: 'rotateZ(' + (this.sidebar ? '-90' : '0') + 'deg)'}" type="text"
                @click="toggleSideBar">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
      <div class="header-middle-con">
        <div class="main-breadcrumb">
          <breadcrumb-nav/>
        </div>
      </div>
      <div class="header-middle-con2">
      </div>
      <div class="header-avator-con">
        <screenfull/>
        <themeDropMenu/>
        <div class="user-dropdown-menu-con">
          <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
              <a href="javascript:void(0)">
                <span class="main-user-name">{{userName}}</span>
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem name="loginout" divided>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Avatar :src="avator" style="background: #2db7f5;margin-left: 10px;"></Avatar>
          </Row>
        </div>
      </div>
    </div>
    <div class="tags-con">
      <tagsOpened/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import breadcrumbNav from './BreadcrumbNav.vue';
  import tagsOpened from './TagsOpened.vue';
  import screenfull from '@/components/main/Screenfull.vue';
  import themeDropMenu from '@/components/main/ThemeDropMenu.vue';
  import avator from '@/assets/avator.png';
  export default {
    name: 'navbar',
    components: {
      breadcrumbNav,
      tagsOpened,
      screenfull,
      themeDropMenu,
    },
    data () {
      return {
        avator:avator,
      };
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'userInfo'
      ]),
      userName(){

          if(this.userInfo===null &&this.userInfo!==""){
              return ""
          }else{
            return  this.userInfo.userName
          }
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ChangeSidebar')
      },
      handleClickUserDropdown(e){
        if(e==="loginout"){
          this.$store.dispatch('LogOut').then(()=>{
            location.reload();
          });
        }
      }
    }
  }
</script>
