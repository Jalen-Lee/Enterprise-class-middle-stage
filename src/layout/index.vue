<template>
  <div class="layout-wrapper">
    <sidebar></sidebar>
    <div class="main-container">
      <div class="main-container-top">
        <navbar></navbar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
    </div>
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
    .main-container{
      flex: 1;
      overflow-x: hidden;
      position: relative;
      &-top{
        position:sticky;
        left: 0;
        top: 0;
      }
    }
  }
</style>
