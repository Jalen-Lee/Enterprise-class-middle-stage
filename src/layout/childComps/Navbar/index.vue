<template>
  <div class="navbar-wrapper">
    <div class="navbar-left">
      <trigger-sidebar/>
      <refresh/>
      <Breadcrumb/>
    </div>
    <div class="navbar-right">
      <screen-full/>
      <user-avatar/>
      <Language/>
      <more-options/>
    </div>
  </div>
</template>

<script>
  import TriggerSidebar from "@/layout/childComps/Navbar/childComps/TriggerSidebar";
  import Refresh from "@/layout/childComps/Navbar/childComps/Refresh";
  import Breadcrumb from "@/layout/childComps/Navbar/childComps/Breadcrumb";
  import MoreOptions from "@/layout/childComps/Navbar/childComps/MoreOptions";
  import Language from "@/layout/childComps/Navbar/childComps/Language";
  import ScreenFull from "@/layout/childComps/Navbar/childComps/ScreenFull";
  import UserAvatar from "@/layout/childComps/Navbar/childComps/UserAvatar";
  export default {
    name: "Navbar",
    components: {TriggerSidebar,Refresh,Breadcrumb,MoreOptions,Language,ScreenFull,UserAvatar},
  }
</script>

<style scoped lang="scss">
  .navbar-wrapper{
    display: flex;
    justify-content: space-between;
    height: 64px;
    .navbar-left,.navbar-right{
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>
