<template>
  <div class="navbar-wrapper">
    <div class="navbar-left">
      <trigger-sidebar/>
      <refresh/>
      <Breadcrumb/>
    </div>
    <div class="navbar-right">
      <notification/>
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
  import Notification from "@/layout/childComps/Navbar/childComps/Notification";
  import SearchBar from "@/layout/childComps/Navbar/childComps/SearchBar";
  export default {
    name: "Navbar",
    components: {TriggerSidebar,Refresh,Breadcrumb,MoreOptions,Language,ScreenFull,UserAvatar,Notification,SearchBar},
  }
</script>

<style scoped lang="scss">
  .navbar-wrapper{
    display: flex;
    justify-content: space-between;
    height: 64px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .navbar-left,.navbar-right{
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>
