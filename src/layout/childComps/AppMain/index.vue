<template>
  <section class="app-main-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :exclude="['redirect']">
        <router-view  />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed:{
      key(){

      }
    }
  }
</script>

<style scoped lang="scss">
  .app-main-wrapper{
    display: flex;
    flex: 1 0 0;
    padding: 20px;
    //background-color: antiquewhite;
  }
</style>
