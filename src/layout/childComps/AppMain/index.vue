<template>
    <section class="app-main-wrapper">
<!--      <el-scrollbar class="main-container" style="height: 100%">-->
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
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
      },
      cachedViews(){
        // console.log("###",this.$store.state.tagsView.cachedViews)
        return this.$store.state.tagsView.cachedViews.map(i=>{
          return i.name
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .app-main-wrapper{
    //margin-top: 108px;
    height: 100%;
    //height: calc(100vh - 108px);
    padding: 128px 20px 10px;
    overflow: scroll;
  }
</style>
