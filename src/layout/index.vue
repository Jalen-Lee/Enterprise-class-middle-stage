<template>
  <div class="layout-wrapper">
    <sidebar></sidebar>
<!--    <el-scrollbar >-->
    <div class="main-container">
      <div class="main-container-top">
        <navbar></navbar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
    </div>

<!--    </el-scrollbar>-->
  </div>
</template>

<script>
  import {AppMain,Navbar,Setting,Sidebar,TagsView} from './childComps'
  export default {
    name: "layout",
    components: {AppMain,Navbar,Sidebar,Setting,TagsView}
  }
</script>

<style scoped lang="scss">
  .layout-wrapper{
    height: 100%;
    display: flex;
    overflow: hidden;
    .main-container{
      flex: 1;
      position: relative;
      .main-container-top{
        width: calc(100% - 256px);
        position:fixed;
        right: 0;
        top: 0;
        z-index: 1;
        height: 108px;
      }
    }
  }
</style>

