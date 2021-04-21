<template>
  <aside
      class="gre-sidebar-fixed gre-sidebar"
      :class="[collapsed?'gre-sidebar--collapse':'']">
    <logo></logo>
    <el-menu
        class="gre-sidebar-menu"
        :collapse="collapsed"
        :background-color="sideBarConfig.backgroundColor"
        :text-color="sideBarConfig.textColor"
        :active-text-color="sideBarConfig.activeTextColor"
        :default-active="$route.path"
        router
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="sideBarConfig.uniqueOpened"
    >
          <sidebar-item
            v-for="item in routes"
            :key="item.path"
            :item="item"
          />
    </el-menu>
  </aside>
</template>

<script>
  import Logo from "@/layout/childComps/Sidebar/childComps/Logo";
  import SidebarItem from './childComps/Sidebar-Item'
  import {constantRoutes} from "@/router"
  export default {
    name: "Sidebar",
    components: {Logo, SidebarItem},
    data() {
      return {
        sideBarConfig:{
          backgroundColor: '#191a23',
          textColor:'#FFFFFF',
          activeTextColor:'#F6CA9D',
          //是否只有一个子菜单展开
          uniqueOpened:false
        },
        routes:[]
      };
    },
    computed:{
      //侧边栏状态：收起/展开
      collapsed(){
        return !this.$store.state.app.sideBar.open
      }
    },
    methods: {
      //sub-menu 展开
      handleOpen(key, keyPath) {
        console.log("sub-menu 展开:",key);
      },
      //sub-menu 关闭
      handleClose(key, keyPath) {
        console.log("sub-menu 关闭",key);
      }
    },
    mounted() {
      this.routes = constantRoutes
    }
  }
</script>

<style scoped lang="scss">
  .gre-sidebar-fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
  }
  .gre-sidebar{
    width: 256px;
    max-width: 256px;
    height: 100%;
    background: #191a23;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    transition: .3s width ease-in-out;
    overflow: auto;
    &--collapse{
      width: 64px;
    }
    &-menu{
      border-right: none;
      &:not(.el-menu--collapse){
        width: 100%;
      }
    }
  }
</style>
