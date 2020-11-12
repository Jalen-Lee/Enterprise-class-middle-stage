<template>
  <div :class="['sidebar-wrapper',sideBarConfig.collapse?'sidebar-wrapper--collapse':'']">
    <logo></logo>
    <el-button type="primary" @click="handleShow">展开/缩小</el-button>
    <el-menu
        default-active="1-4-1"
        class="sidebar-body"
        :collapse="sideBarConfig.collapse"
        :background-color="sideBarConfig.backgroundColor"
        :text-color="sideBarConfig.textColor"
        :active-text-color="sideBarConfig.activeTextColor"
        :default-active="$route.path"
        router
        @open="handleOpen"
        @close="handleClose"
    >
      <el-submenu index="/dashBoard">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dashBoard/analysis" :route="{path:'/dashBoard/analysis'}">分析</el-menu-item>
          <el-menu-item index="/dashBoard/monitor" :route="{path:'/dashBoard/monitor'}">监控</el-menu-item>
          <el-menu-item index="/dashBoard/workplace" :route="{path:'/dashBoard/workplace'}">工作台</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/401">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/401" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import Logo from "@/layout/childComps/Sidebar/childComps/Logo";
  export default {
    name: "Sidebar",
    components: {Logo},
    data() {
      return {
        sideBarConfig:{
          collapse: false,
          backgroundColor: '#191a23',
          textColor:'#FFFFFF',
          activeTextColor:'#F6CA9D',
        }
      };
    },
    methods: {
      handleShow(){
        this.sideBarConfig.collapse = !this.sideBarConfig.collapse
        console.log("当前路由",this.$route)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
    &--collapse{
      width: 64px;
    }
    .sidebar-body{
      border-right: none;
      &:not(.el-menu--collapse){
        width: 100%;
      }
    }
  }
</style>
<style lang="scss">
  .el-menu-item-group__title{
    display: none;
  }
</style>
