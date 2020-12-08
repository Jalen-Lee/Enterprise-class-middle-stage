<template>
    <section class="app-main-wrapper">
<!--      <el-scrollbar class="main-container" style="height: 100%">-->
        <transition name="fade-transform" mode="out-in">
          <keep-alive :exclude="['redirect']">
            <router-view  :key="key"/>
          </keep-alive>
        </transition>
<!--      </el-scrollbar>-->
    </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed:{
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-main-wrapper{
    display: flex;
    flex: 1 0 0;
    //height: calc(100vh - 108px);
    padding: 20px;
    //overflow-x: hidden;
    //position: relative;
  }
</style>
