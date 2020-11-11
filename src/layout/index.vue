<template>
  <div class="layout-wrapper">
    <sidebar></sidebar>
    <div class="main-container">
      <div>
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
      display: flex;
      flex: 1;
      //background-color: aqua;
      flex-direction: column;
    }
  }
</style>
