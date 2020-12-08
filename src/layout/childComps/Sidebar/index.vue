<template>
  <div :class="['sidebar-wrapper',hasCollapse?'sidebar-wrapper--collapse':'']">
    <logo></logo>
    <el-menu
        default-active="1-4-1"
        class="sidebar-body"
        :collapse="hasCollapse"
        :background-color="sideBarConfig.backgroundColor"
        :text-color="sideBarConfig.textColor"
        :active-text-color="sideBarConfig.activeTextColor"
        :default-active="$route.path"
        router
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="sideBarConfig.uniqueOpened"
    >
      <template v-for="item1 in routes">
        <el-submenu :index="item1.path" v-if="hasOwnChildren(item1)">
          <template slot="title">
            <i :class="['iconfont',item1.meta.icon]"></i>
            <span slot="title">{{item1.meta.title}}</span>
          </template>
          <template v-for="item2 in item1.children" >
            <el-submenu :index="item2.path" v-if="hasOwnChildren(item2)">
              <template slot="title">
                <i :class="['iconfont',item2.meta.icon]"></i>
                <span slot="title">{{item2.meta.title}}</span>
              </template>
              <el-menu-item
                  v-for="item3 in item2.children"
                  :index="item3.path"
                  :route="{path: item3.path}"
                  :key="item3.path"
              >
                <i :class="['iconfont',item3.meta.icon]"></i>
                {{item3.meta.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item2.path" :route="{path: item2.path}">
              <i :class="['iconfont',item2.meta.icon]"></i>
              <span slot="title">{{item2.meta.title}}</span>
            </el-menu-item>
          </template>

        </el-submenu>
        <el-menu-item v-else :index="item1.path" :route="{path: item1.path}">
          <i :class="['iconfont',item1.meta.icon]"></i>
          <span slot="title">{{item1.meta.title}}</span>
        </el-menu-item>
      </template>


    </el-menu>
  </div>
</template>

<script>
  import Logo from "@/layout/childComps/Sidebar/childComps/Logo";
  import {constantRoutes} from "@/router"
  export default {
    name: "Sidebar",
    components: {Logo},
    data() {
      return {
        sideBarConfig:{
          backgroundColor: '#191a23',
          textColor:'#FFFFFF',
          activeTextColor:'#F6CA9D',
          //是否只有一个子菜单展开
          uniqueOpened:true
        },
        routes:[]
      };
    },
    computed:{
      hasCollapse(){
        return !this.$store.state.app.sideBar.open
      }
    },
    methods: {
      hasOwnChildren(item){
        return item.hasOwnProperty('children')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      this.routes = constantRoutes.filter(item=>{
        return !item.hidden
      })
      console.log("侧边栏建立",this.routes)
    }
  }
</script>

<style scoped lang="scss">
  .sidebar-wrapper{
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
    .sidebar-body{
      border-right: none;
      &:not(.el-menu--collapse){
        width: 100%;
      }
      .iconfont{
        margin-right: 8px;
      }
    }
  }
</style>
