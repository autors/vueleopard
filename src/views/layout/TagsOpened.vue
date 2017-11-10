<template>
  <div ref="scrollCon" class="tags-outer-scroll-con">
    <div class="close-all-tag-con">
      <Dropdown transfer @on-click="handleTagsOption">
        <Button size="small" type="primary">
          标签选项
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="clearAll">关闭所有</DropdownItem>
          <DropdownItem name="clearOthers">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div ref="scrollBody" class="tags-inner-scroll-body">
      <transition-group name="taglist-moving-animation">
        <Tag
          type="dot"
          v-for="(item, index) in pageTagsList"
          ref="tagsPageOpened"
          :key="item.name"
          :name="item.name"
          @on-close="closePage"
          @click.native="linkTo(item)"
          :closable="item.name==='home_index'?false:true"
          :color="item.children?(item.children[0].name===currentPageName?'blue':'default'):(item.name===currentPageName?'blue':'default')"
        >{{item.title }}
        </Tag>
      </transition-group>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    computed: {
      pageTagsList(){
        return this.$store.state.app.pageOpenedList;
      },
      currentPageName(){
        return this.$route.name
      }
    },
    methods: {
      handleTagsOption(e){
        if (e === "clearAll") {
          this.$store.commit('clearAllPageTags');
          this.$router.push("/dashboard");
        } else if (e === "clearOthers") {
          this.$store.commit('clearOtherPageTags', this.currentPageName);
        }
      },
      closePage(e, name){
        this.$store.commit('closeOnePageOpend', name);
        if (this.currentPageName === name) {
          let pagePath = '';
          if (this.pageTagsList.length === 1) {
            pagePath = this.pageTagsList[0].path;
          } else {
            pagePath = this.pageTagsList[1].path;
          }
          this.$router.push(pagePath);
        }else {

        }
      },
      linkTo(item){
        if (item.name !== this.currentPageName) {
          this.$router.push(item.path);
        }
      }
    }
  }
</script>
