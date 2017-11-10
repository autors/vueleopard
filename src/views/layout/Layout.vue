<template>
  <div class="main" :class="{'main-hide-text': sidebar}">
    <div class="sidebar-menu-con"
         :style="{width: sidebar?'60px':'200px', overflow: sidebar ? 'visible' : 'auto', background: menuTheme === 'dark'?'#495060':'white'}">
      <Sidebar/>
    </div>
    <div class="main-header-con" :class="{'sidebarleft':sidebar,'sidebarleftleng':!sidebar}">
      <Navbar/>
    </div>
    <div class="single-page-con" :style="{left: sidebar?'60px':'200px'}">
      <div class="single-page">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <Bottom/>
    </div>
  </div>
</template>


<script>
  import Sidebar from './Sidebar.vue'
  import Bottom from './Bottom.vue'
  import Navbar from './Navbar.vue'
  import {mapGetters} from 'vuex';
  import util from '@/utils/util.js';
  export default {
    name: 'layout',
    components: {
      Sidebar,
      Bottom,
      Navbar
    },
    data () {
      return {
        hideMenuText: false,
        currentPath: "",
      };
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ]),
      menuTheme(){
        return this.$store.state.app.menuTheme;
      }
    },
    methods: {
      changePathArr(name){
        let pathArr = util.setCurrentPath(this, name);
        this.$store.dispatch('ChangeCurrentPathArr', pathArr);
        let tag = pathArr[pathArr.length-1]
        this.$store.commit('addPageOpened', tag);
      }
    },
    watch: {
      '$route' (to) {
        this.changePathArr(to.name)
      }
    },
    mounted () {
      this.changePathArr(this.$route.name)
    }
  }
</script>

<style lang="less">
  .maxlogo {
    padding-right: 1em;
  }

  .sidebarleft {
    padding-left: 60px;
  }

  .sidebarleftleng {
    padding-left: 200px;
  }

</style>
