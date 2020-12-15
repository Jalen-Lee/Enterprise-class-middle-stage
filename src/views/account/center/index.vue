<template>
  <div class="account-center-wrapper">
    <div class="account-center-wrapper-left">
      <ProfileCard/>
    </div>
    <div class="account-center-wrapper-right">
      <Tabs/>
    </div>
  </div>
</template>

<script>
  import Tabs from "@/views/account/center/childComps/Tabs";
  import ProfileCard from "./childComps/profile-card"
  export default {
    name: "account-center",
    components:{Tabs,ProfileCard},
    activated() {
      console.log("活跃了")
      this.$store.dispatch('accountCenter/getProjects')
    }
  }
</script>

<style scoped lang="scss">
  .account-center-wrapper{
    width: 100%;
    height: calc(100vh - 108px);
    display: flex;
    flex-flow: row wrap;
    &-left{
      padding-left: 12px;
      padding-right: 12px;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    &-right{
      padding-left: 12px;
      padding-right: 12px;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
      //background: aqua;
      height: 2000px;
    }
  }
</style>
