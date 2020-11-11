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
        @open="handleOpen"
        @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
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
          defaultActive:'',
        }
      };
    },
    methods: {
      handleShow(){
        this.sideBarConfig.collapse = !this.sideBarConfig.collapse
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
